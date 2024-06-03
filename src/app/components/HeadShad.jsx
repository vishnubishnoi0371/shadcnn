"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const myArr = [
  {
    title: "Lorem1",
    heading:
      "orem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ea?",
  },
  {
    title: "lorem2",
    heading: "onsectetur adipisicing elit. Soluta, ea?",
  },
  {
    title: "lorem3",
    heading: "orem ipsum dolor sit amet c. Soluta, ea?",
  },
  {
    title: "lorem4",
    heading: "onsectetur adipisicing elit. Soluta, ea?",
  },
  {
    title: "lorem5",
    heading: "orem ipsum dolor sit amet c. Soluta, ea?",
  },
];

const HeadShad = () => {
  return (
    <div className=" bg-black min-h-screen">
      <div className="max-w-[700px] pb-10 px-3 mx-auto">
        <h1 className="text-center text-white text-5xl mb-5 pt-8 pb-0">
          Shad-cn Accordion{" "}
        </h1>
        <Accordion
          type="single"
          collapsible
          className="w-full "
          defaultValue="item-1"
        >
          {myArr.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 2}`}
              className="border-2 text-white rounded-xl  px-4 mb-5 border-r-2"
            >
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent className="gap-4">
                {item.heading}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default HeadShad;
