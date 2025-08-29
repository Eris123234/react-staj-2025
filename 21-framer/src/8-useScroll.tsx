import { motion, useMotionValueEvent, useScroll } from "motion/react";

const App = () => {
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("scrollY px:", latest);
  });

  return (
    <div>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#FF0088",
        }}
      ></motion.div>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sint
        facere sequi quam quis tenetur, temporibus velit! Tempora, sed fugiat,
        minus voluptate maxime voluptas, asperiores id recusandae perferendis
        perspiciatis aut.
      </span>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sint
        facere sequi quam quis tenetur, temporibus velit! Tempora, sed fugiat,
        minus voluptate maxime voluptas, asperiores id recusandae perferendis
        perspiciatis aut.
      </span>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sint
        facere sequi quam quis tenetur, temporibus velit! Tempora, sed fugiat,
        minus voluptate maxime voluptas, asperiores id recusandae perferendis
        perspiciatis aut.
      </span>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sint
        facere sequi quam quis tenetur, temporibus velit! Tempora, sed fugiat,
        minus voluptate maxime voluptas, asperiores id recusandae perferendis
        perspiciatis aut.
      </span>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sint
        facere sequi quam quis tenetur, temporibus velit! Tempora, sed fugiat,
        minus voluptate maxime voluptas, asperiores id recusandae perferendis
        perspiciatis aut.
      </span>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sint
        facere sequi quam quis tenetur, temporibus velit! Tempora, sed fugiat,
        minus voluptate maxime voluptas, asperiores id recusandae perferendis
        perspiciatis aut.
      </span>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sint
        facere sequi quam quis tenetur, temporibus velit! Tempora, sed fugiat,
        minus voluptate maxime voluptas, asperiores id recusandae perferendis
        perspiciatis aut.
      </span>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sint
        facere sequi quam quis tenetur, temporibus velit! Tempora, sed fugiat,
        minus voluptate maxime voluptas, asperiores id recusandae perferendis
        perspiciatis aut.
      </span>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sint
        facere sequi quam quis tenetur, temporibus velit! Tempora, sed fugiat,
        minus voluptate maxime voluptas, asperiores id recusandae perferendis
        perspiciatis aut.
      </span>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sint
        facere sequi quam quis tenetur, temporibus velit! Tempora, sed fugiat,
        minus voluptate maxime voluptas, asperiores id recusandae perferendis
        perspiciatis aut.
      </span>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sint
        facere sequi quam quis tenetur, temporibus velit! Tempora, sed fugiat,
        minus voluptate maxime voluptas, asperiores id recusandae perferendis
        perspiciatis aut.
      </span>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sint
        facere sequi quam quis tenetur, temporibus velit! Tempora, sed fugiat,
        minus voluptate maxime voluptas, asperiores id recusandae perferendis
        perspiciatis aut.
      </span>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sint
        facere sequi quam quis tenetur, temporibus velit! Tempora, sed fugiat,
        minus voluptate maxime voluptas, asperiores id recusandae perferendis
        perspiciatis aut.
      </span>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sint
        facere sequi quam quis tenetur, temporibus velit! Tempora, sed fugiat,
        minus voluptate maxime voluptas, asperiores id recusandae perferendis
        perspiciatis aut.
      </span>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sint
        facere sequi quam quis tenetur, temporibus velit! Tempora, sed fugiat,
        minus voluptate maxime voluptas, asperiores id recusandae perferendis
        perspiciatis aut.
      </span>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sint
        facere sequi quam quis tenetur, temporibus velit! Tempora, sed fugiat,
        minus voluptate maxime voluptas, asperiores id recusandae perferendis
        perspiciatis aut.
      </span>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sint
        facere sequi quam quis tenetur, temporibus velit! Tempora, sed fugiat,
        minus voluptate maxime voluptas, asperiores id recusandae perferendis
        perspiciatis aut.
      </span>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sint
        facere sequi quam quis tenetur, temporibus velit! Tempora, sed fugiat,
        minus voluptate maxime voluptas, asperiores id recusandae perferendis
        perspiciatis aut.
      </span>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sint
        facere sequi quam quis tenetur, temporibus velit! Tempora, sed fugiat,
        minus voluptate maxime voluptas, asperiores id recusandae perferendis
        perspiciatis aut.
      </span>
    </div>
  );
};

export default App;
