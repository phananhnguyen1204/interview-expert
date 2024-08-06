"use client";

import { useRef, useState } from "react";
import Homecard from "./homecard";
import { Button } from "./ui/button";
import { motion, useInView } from "framer-motion";

const CardValues = [
  {
    title: "Card1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio atque, magni autem quam reprehenderit nostrum voluptatibus enim minima cupiditate maiores magnam beatae sequi totam at amet? Aspernatur sunt laboriosam dignissimos?",
    imageUrl: "/assets/image1.png",
  },
  {
    title: "Card2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio atque, magni autem quam reprehenderit nostrum voluptatibus enim minima cupiditate maiores magnam beatae sequi totam at amet? Aspernatur sunt laboriosam dignissimos?",
    imageUrl: "/assets/image2.jpg",
  },
  {
    title: "Card3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio atque, magni autem quam reprehenderit nostrum voluptatibus enim minima cupiditate maiores magnam beatae sequi totam at amet? Aspernatur sunt laboriosam dignissimos?",
    imageUrl: "/assets/image3.jpg",
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedCard(index);
  };

  return (
    <div className="justify-center items-center p-4 flex flex-col">
      <div className="text-center p-5">
        <h1 className="text-3xl md:text-4xl font-bold mb-5">How It Works</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Give mock interview in just 3 simplar easy step
        </p>
      </div>
      <div
        ref={ref}
        className="text-center flex flex-row justify-center items-center space-x-7 gap-5 p-4 mx-5 mb-7"
      >
        {CardValues.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: index * 0.3 }}
            className="list-none"
          >
            <Homecard
              title={card.title}
              content={card.content}
              onClick={() => handleCardClick(index)}
            />
          </motion.div>
        ))}
      </div>
      {selectedCard !== null && (
        <div className="mt-7 mb-7">
          <img
            src={CardValues[selectedCard].imageUrl}
            alt={`Image for ${CardValues[selectedCard].title}`}
            className="w-full max-w-3xl mx-auto shadow-lg"
          />
        </div>
      )}
      <div className="mt-5">
        <Button className="bg-orange-400 text-white px-6 py-2 rounded-md w-fit text-lg hover:bg-orange-500">
          Get Started
        </Button>
      </div>
    </div>
  );
};
export default HowItWorks;
