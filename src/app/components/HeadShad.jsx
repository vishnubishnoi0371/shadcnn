"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const myArr = [
  {
    title: "Lorem",
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
    <div className="max-w-[700px] mx-auto">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        {myArr.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index + 1}`}
            className="border-l-2 px-4 border-r-2"
          >
            <AccordionTrigger className="">{item.title}</AccordionTrigger>
            <AccordionContent>{item.heading}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default HeadShad;