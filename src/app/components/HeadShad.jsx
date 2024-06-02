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
    <div className="max-w-[700px] px-3 mx-auto">
      <h1 className="text-center text-5xl mb-5 pb-0">Shan-cn Accordion </h1>
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
            className="border-2  px-4 mb-5 border-r-2"
          >
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent className="gap-4">
              {item.heading}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default HeadShad;
