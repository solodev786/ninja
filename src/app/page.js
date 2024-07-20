"use client";
import Image from "next/image";
import { IoApps } from "react-icons/io5";
import face from "../assets/4.png";
import one from "../assets/1.png";
import two from "../assets/2.png";
import four from "../assets/5.jpg";
import five from "../assets/6.jpg";
import six from "../assets/7.jpg";
import seven from "../assets/8.jpg";
import three from "../assets/3.jpg";

import w1 from "../assets/w1.jpg";
import w2 from "../assets/w2.jpg";
import w3 from "../assets/w3.jpg";

import { motion } from "framer-motion";

import { Anton } from "next/font/google";
import { TiArrowDown } from "react-icons/ti";
import { GiBouncingSword } from "react-icons/gi";

const anton = Anton({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <>
      <div className=" w-full h-auto bg-gradient-radial from-red-700 to-black text-white flex flex-col gap-0">
        <nav className=" w-full px-10 py-5 flex items-center justify-between">
          <div className=" flex gap-10 items-center">
            <h1 className=" uppercase text-3xl font-bold">Game</h1>
            <input
              type="text"
              className=" h-10 rounded-full bg-gray-600 px-5"
              placeholder="Search"
            />
          </div>
          <div className=" flex items-center gap-10 uppercase">
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Ninjas</h1>
            <h1>Weapons</h1>
          </div>
          <div className=" flex items-center gap-2">
            <h1>
              <IoApps />
            </h1>
            <h1>Menu</h1>
          </div>
        </nav>
        <div className=" flex items-center w-full h-full justify-between">
          <div className=" px-10 flex flex-col gap-10 w-1/3 ">
            <div className=" flex flex-col gap-5">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <h1 className=" uppercase ">
                  A ninja or shinobi was an infiltration agent, mercenary, or
                  guerrilla warfare and later bodyguard expert in feudal Japan.
                  They were often employed in siege, espionage missions, and
                  military deception.
                </h1>
              </motion.div>
              <div className=" flex items-center">
                <motion.div
                  className={`${anton.className} text-9xl uppercase`}
                  initial={{ y: 200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.1 }}
                >
                  N
                </motion.div>
                <motion.div
                  className={`${anton.className} text-9xl uppercase`}
                  initial={{ y: 200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  i
                </motion.div>
                <motion.div
                  className={`${anton.className} text-9xl uppercase`}
                  initial={{ y: 200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  N
                </motion.div>
                <motion.div
                  className={`${anton.className} text-9xl uppercase`}
                  initial={{ y: 200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  j
                </motion.div>
                <motion.div
                  className={`${anton.className} text-9xl uppercase`}
                  initial={{ y: 200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  a
                </motion.div>
                <motion.div
                  className={`${anton.className} text-9xl uppercase ml-5`}
                  initial={{ y: 200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  w
                </motion.div>
                <motion.div
                  className={`${anton.className} text-9xl uppercase`}
                  initial={{ y: 200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  o
                </motion.div>
                <motion.div
                  className={`${anton.className} text-9xl uppercase`}
                  initial={{ y: 200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  r
                </motion.div>
                <motion.div
                  className={`${anton.className} text-9xl uppercase`}
                  initial={{ y: 200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  l
                </motion.div>
                <motion.div
                  className={`${anton.className} text-9xl uppercase`}
                  initial={{ y: 200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9 }}
                >
                  d
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className=" flex items-center gap-4 z-10"
              >
                <h1 className=" uppercase text-xl">Choose your ninja</h1>
                <h1 className=" border border-white rounded-full ">
                  <TiArrowDown className=" text-3xl" />
                </h1>
              </motion.div>
            </div>
            <div className="w-[800px]   h-96 flex flex-wrap gap-5 z-10">
              <motion.div
                initial={{ scale: 0, rotateY: 360 }}
                animate={{ scale: 1, rotateY: 0 }}
                transition={{
                  duration: 1,
                  delay: 1,
                  type: "spring",
                  stiffness: 100,
                }}
                className=" w-1/4 h-32 bg-gray-600 rounded-3xl"
              >
                <Image
                  src={three}
                  className=" w-full h-full object-cover rounded-3xl"
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0, rotateY: 360 }}
                animate={{ scale: 1, rotateY: 0 }}
                transition={{
                  duration: 1,
                  delay: 1.3,
                  type: "spring",
                  stiffness: 100,
                }}
                className=" w-1/4 h-32 bg-gray-600 rounded-3xl"
              >
                <Image
                  src={four}
                  className=" w-full h-full object-cover rounded-3xl"
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0, rotateY: 360 }}
                animate={{ scale: 1, rotateY: 0 }}
                transition={{
                  duration: 1,
                  delay: 1.6,
                  type: "spring",
                  stiffness: 100,
                }}
                className=" w-1/4 h-32 bg-gray-600 rounded-3xl"
              >
                <Image
                  src={five}
                  className=" w-full h-full object-cover rounded-3xl"
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0, rotateY: 360 }}
                animate={{ scale: 1, rotateY: 0 }}
                transition={{
                  duration: 1,
                  delay: 1.8,
                  type: "spring",
                  stiffness: 100,
                }}
                className=" w-1/4 h-32 bg-gray-600 rounded-3xl"
              >
                <Image
                  src={six}
                  className=" w-full h-full object-cover rounded-3xl"
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0, rotateY: 360 }}
                animate={{ scale: 1, rotateY: 0 }}
                transition={{
                  duration: 1,
                  delay: 2.4,
                  type: "spring",
                  stiffness: 100,
                }}
                className=" w-1/4 h-32 bg-gray-600 rounded-3xl"
              >
                <Image
                  src={seven}
                  className=" w-full h-full object-cover rounded-3xl"
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0, rotateY: 360 }}
                animate={{ scale: 1, rotateY: 0 }}
                transition={{
                  duration: 1,
                  delay: 2.3,
                  type: "spring",
                  stiffness: 100,
                }}
                className=" w-1/4 h-32 bg-gray-600 rounded-3xl"
              >
                <Image
                  src={face}
                  className=" w-full h-full object-cover rounded-3xl"
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0, rotateY: 360 }}
                animate={{ scale: 1, rotateY: 0 }}
                transition={{
                  duration: 1,
                  delay: 2.5,
                  type: "spring",
                  stiffness: 100,
                }}
                className=" w-1/4 h-32 bg-gray-600 rounded-3xl"
              >
                <Image
                  src={two}
                  className=" w-full h-full object-cover rounded-3xl"
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0, rotateY: 360 }}
                animate={{ scale: 1, rotateY: 0 }}
                transition={{
                  duration: 1,
                  delay: 2.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className=" w-1/4 h-32 bg-gray-600 rounded-3xl"
              >
                <Image
                  src={three}
                  className=" w-full h-full object-cover rounded-3xl"
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0, rotateY: 360 }}
                animate={{ scale: 1, rotateY: 0 }}
                transition={{
                  duration: 1,
                  delay: 2.9,
                  type: "spring",
                  stiffness: 100,
                }}
                className=" w-1/4 h-32 bg-gray-600 rounded-3xl"
              >
                <Image
                  src={one}
                  className=" w-full h-full object-cover rounded-3xl"
                />
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              delay: 2.9,
              type: "spring",
              stiffness: 100,
            }}
            className="  flex justify-center  h-full"
          >
            <Image src={face} width={700} />
          </motion.div>
          <div className=" w-1/5 h-[800px]  flex flex-col gap-10 items-end pr-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 3 }}
              className=" flex flex-col gap-2 items-end"
            >
              <h1
                className={`${anton.className} text-6xl font-bold uppercase text-yellow-700`}
              >
                chitti robo
              </h1>
              <h1 className=" uppercase ">Frictional killer</h1>
            </motion.div>
            <div className=" flex flex-col gap-5 items-end">
              <div className={`${anton.className} text-2xl uppercase`}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2 }}
                  className=" flex items-center gap-2"
                >
                  <span className=" text-3xl">
                    <GiBouncingSword />
                  </span>
                  Weapons{" "}
                </motion.div>
              </div>
              <div className=" w-full flex flex-wrap gap-5">
                <motion.div
                  initial={{ x: 400 }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: 2.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className=" w-20 rounded-full h-20 border-white border-2"
                >
                  <Image
                    src={w1}
                    className=" w-full h-full object-cover rounded-full"
                  />
                </motion.div>
                <motion.div
                  initial={{ x: 400 }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: 2.4,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className=" w-20 rounded-full h-20 border-white border-2"
                >
                  <Image
                    src={w2}
                    className=" w-full h-full object-cover rounded-full"
                  />
                </motion.div>
                <motion.div
                  initial={{ x: 400 }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: 2.6,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className=" w-20 rounded-full h-20  border-white border-2"
                >
                  <Image
                    src={w3}
                    className=" w-full h-full object-cover rounded-full"
                  />
                </motion.div>
              </div>
            </div>
            <div className=" flex flex-col gap-5 items-end">
              <div className={`${anton.className} text-2xl uppercase`}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.8 }}
                  className=" flex items-center gap-2"
                >
                  <span className=" text-3xl">
                    <GiBouncingSword />
                  </span>
                  Abilities{" "}
                </motion.div>
              </div>
              <div className=" w-full flex flex-col gap-5 items-end">
                <motion.div
                  initial={{ x: 400 }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: 3,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className=" w-20 rounded-full h-20 border-white border-2"
                >
                  <Image
                    src={w1}
                    className=" w-full h-full object-cover rounded-full"
                  />
                </motion.div>
                <motion.div
                  initial={{ x: 400 }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: 3.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className=" w-20 rounded-full h-20 border-white border-2"
                >
                  <Image
                    src={w2}
                    className=" w-full h-full object-cover rounded-full"
                  />
                </motion.div>
                <motion.div
                  initial={{ x: 400 }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: 3.4,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className=" w-20 rounded-full h-20  border-white border-2"
                >
                  <Image
                    src={w3}
                    className=" w-full h-full object-cover rounded-full"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
