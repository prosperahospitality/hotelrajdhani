"use client";
import { useState, useEffect } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import { PlusCircle, MinusCircle } from "lucide-react";
import { cn } from "@/_lib/utils";
import { PiUsersLight } from "react-icons/pi";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { handleAgeSelect } from "@/app/redux/slices/searchSlice";
import { useSelector } from "react-redux";

const IncDecfunc = ({ title, description, onChange, value, ageSelect }) => {

  const [children, setChildren] = useState(
    ageSelect.length === 0 ? [{ id: value, age: "" }] : ageSelect
  );
  const dispatch = useDispatch();

  function increment() {
    onChange(value + 1);

    setChildren([...children, { id: children.length + 1, age: "" }]);
  }

  function decrement() {
    onChange(value > 0 ? value - 1 : 0);

    if (children.length > 1) {
      setChildren(children.slice(0, -1));
    }
    if (children.length === 0 || value === 0) {
      setChildren([]);
    }
  }

  const handleAgeChange = (id, value) => {
    setChildren(
      children.map((child) =>
        child.id === id ? { ...child, age: value } : child
      )
    );
  };

  useEffect(() => {
    if (children) {
     

      dispatch(handleAgeSelect(children));
    }
  }, [children]);

  useEffect(() => {
    if (parseInt(value) === 0) {
      setChildren([]);
    }
  }, [value]);

  return (
    <div className="py-2 px-4 flex flex-col w-full gap-5">
      <div className="flex justify-between">
        <div className="w-60">
          <h1 className="text-base">{title}</h1>
          <h4>{description}</h4>
        </div>

        <div className="flex gap-4 items-center text-gray-500">
          <Button
            isIconOnly
            variant="shadow"
            color="primary"
            size="sm"
            isDisabled={value === 0}
            onClick={decrement}
          >
            <FiMinus />
          </Button>
          <h1 className="text-lg">{value}</h1>
          <Button
            isIconOnly
            variant="shadow"
            color="primary"
            size="sm"
            onClick={increment}
          >
            <GoPlus />
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {children?.map((child, index) => (
          <div key={child.id} className="flex items-center space-x-2">
            <select
              value={child.age}
              onChange={(e) => handleAgeChange(child.id, e.target.value)}
              className="border rounded px-2 py-1 "
            >
              <option value="">Age needed</option>
              {Array.from({ length: 17 }, (_, i) => i + 1).map((age) => (
                <option key={age} value={age}>
                  {age} years old
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

const AdultsRoomfunc = ({ title, description, onChange, value }) => {
  function increment() {
    onChange(value + 1);
  }

  function decrement() {
    onChange(value > 1 ? value - 1 : 1);
  }

  return (
    <div className="py-2 px-4 flex w-full gap-5">
      <div className="w-60">
        <h1 className="text-base">{title}</h1>
        <h4>{description}</h4>
      </div>

      <div className="flex gap-4 items-center text-gray-500">
        <Button
          isIconOnly
          variant="shadow"
          color="primary"
          size="sm"
          isDisabled={value === 0}
          onClick={decrement}
        >
          <FiMinus />
        </Button>
        <h1 className="text-lg">{value}</h1>
        <Button
          isIconOnly
          variant="shadow"
          color="primary"
          size="sm"
          onClick={increment}
        >
          <GoPlus />
        </Button>
      </div>
    </div>
  );
};

export default function RoomsAndGuests({
  onAdultsSelect,
  onChildSelect,
  onRoomsSelect,
  adultsSelectParam,
  childSelectParam,
  roomsSelectParam,
  onChildAgeSelect,
  ageArray,
}) {
  const ageSelect = useSelector((state) => state.search.ageSelect);
  
  const [adults, setAdults] = useState(parseInt(adultsSelectParam));
  const [children, setChildren] = useState(parseInt(childSelectParam));
  const [infants, setInfants] = useState(0);
  const [rooms, setRooms] = useState(parseInt(roomsSelectParam));
  const [pets, setPets] = useState(0);
  const [buttonText, setButtonText] = useState("Add Guest");
  // const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleDoneClick = () => {
    setButtonText(`Adults: ${adults}, Rooms: ${rooms}`);
    // Close the popover and update the button text
    // setIsPopoverOpen(true);
  };

  useEffect(() => {
    const checkAndCallFunction = (func, arg) => {

      if (typeof func === "function") {
        func(arg);
      } else {
        // console.error(`${func} is not a function.`);
      }
    };

    checkAndCallFunction(onAdultsSelect, adults);
    checkAndCallFunction(onChildSelect, children);
    checkAndCallFunction(onRoomsSelect, rooms);
  }, [adults, children, rooms, onAdultsSelect, onChildSelect, onRoomsSelect]);

  return (
    <div className="flex w-full justify-center items-center ">
      <Popover
        placement="bottom"
        onVisibleChange={(visible) => setIsPopoverOpen(visible)}
      >
        <PopoverTrigger asChild className="text-black bg-white rounded-lg">
          <Button
            variant="destructive"
            className={cn("w-full justify-center text-center font-normal")}
          >
            <PiUsersLight className="size-6 text-gray-500" />
            <span className="font-semibold text-gray-500">{`Adults: ${adults}, Childrens: ${children}`}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="ml-2 lg:m-0 bg-white w-[80%] lg:w-full">
          <AdultsRoomfunc title="Adults" description="Ages 13 or above" onChange={setAdults} value={adults} />
          <IncDecfunc title="Children" description="Ages 0–17" onChange={setChildren} value={children} ageSelect={ageSelect} />
          {/* <IncDecfunc title="Infants" description="Under 2" onChange={setInfants} value={infants} /> */}
          {/* <AdultsRoomfunc title="Rooms" description="Room Count" onChange={setRooms} value={rooms} /> */}
          {/* <IncDecfunc title="Pets" description={<a href="/" className="hover:underline">Bringing a service animal?</a>} onChange={setPets} value={pets} /> */}
          {/* <Button color="secondary" variant="shadow" size="md" >
            Done
          </Button> */}
        </PopoverContent>
      </Popover>
    </div>
  );
}
