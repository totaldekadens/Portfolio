import { IconHash } from "@tabler/icons";
import PresText from "./PresText";
import { HashtagIcon } from "@heroicons/react/20/solid";

const PresentationDesktop = () => {
  return (
    <>
      <div
        id="presentation"
        style={{ minHeight: "70vh", paddingTop: 96 }}
        className="px-5 text-white max-w-7xl  justify-center items-start flex-col lg:flex-row hidden lg:flex"
      >
        <div className="flex px-1 sm:px-10 flex-col">
          <div className="px-3 mb-2">
            <h2 style={{ fontSize: 38 }}>Hello Hello!</h2>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col basis-1/3 px-3">
              <p style={{ fontSize: 18 }}>
                You might don’t want to read a whole novel about me so I’ll try
                to be short
              </p>
              <br />
              <PresText question="My name?" answer="Angelica Moberg Skoglund" />
              <PresText
                question="Nickname?"
                answer="Ange (please call me Ange!)"
              />
              <PresText question="Where do I live?" answer="Skene (Mark)" />
              <PresText
                question="Do I have any animals?"
                answer="Yes! Two cats! Sigge and Greger"
              />
              <PresText question="Favorite candy?" answer="Chocolate" />
            </div>
            <div className="flex flex-col basis-1/3 px-3">
              <PresText
                question="Education?"
                answer="Web development with focus on E-commerce (the name is now changed to Full Stack Developer)"
              />
              <PresText question="School?" answer="Medieinstitutet Göteborg" />
              <PresText question="Graduation?" answer="17th of May 2023" />
              <PresText
                question="My nisch?"
                answer="This one is so hard, because I’m right between frontend and backend at the moment. I know I like to work with functionality and problem solving, so I’ve been drawn to eg admin pages within projects in school and being the one ending up with creating the API’s. I think it has something to do with my need for the feeling of control, if we are going to be honest."
              />
              <PresText
                question="How I work?"
                answer="If I have something completely new in front of me, I need some ramp up time. My pattern is in general when I go back to my previous jobs that when I get into something, I end up really being good at it. That’s because I always want more. I don’t like to just know a little, I want to understand the whole process."
              />
            </div>
            <div className="flex mb-24 lg:mb-0 basis-full lg:basis-1/3 px-10 justify-center items-start h-full w-full">
              <div className="flex w-full h-full flex-col justify-center">
                <img
                  src="profil.png"
                  alt="en bild på mig själv"
                  className="rounded-md h-60 w-60 mb-10"
                  style={{ borderRadius: "50%" }}
                />
                <PresText
                  question="Teamwork?"
                  answer="I played soccer until I turned 23 so I’m a team player in the root. I have no problem helping out if someone is in need of help or brainstorming. Asking for help is neither a problem for me. We do it together and we complement each other, that’s my mindset."
                />
                <PresText
                  question="Leadership?"
                  answer="In total I have had a leadership role in almost 7 years. I love being there for people and help them grow. My ambition is not to be a leader again, but I think it’s a good thing to mention about my past."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PresentationDesktop;
