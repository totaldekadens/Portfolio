import { IconHash } from "@tabler/icons";
import PresText from "./PresText";

const PresentationDesktop = () => {
  return (
    <>
      <div
        id="presentation"
        style={{ minHeight: "70vh", paddingTop: 96 }}
        className="px-5 text-white max-w-7xl  justify-center items-start flex-col lg:flex-row hidden lg:flex "
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
              {/*     <PresText question="Graduation?" answer="17th of May 2023" /> */}
              <PresText
                question="My nisch?"
                answer="This one is so hard, because I’m right between frontend and backend at the moment. I know I like to work with functionality and problem solving, so I’ve been drawn to eg admin pages within projects in school and been the one ending up with creating the API’s. I think it has something to do with my need of feeling in control, if we are going to be honest."
              />
              <PresText
                question="How I work?"
                answer="When I go back and look at how it was at my previous workplaces, I notice a pattern. I get a task or responsibility and I end up being really good at it. I always want to get a good understanding of why I do things and not just how to do it. It is very important to me. I think I am perceived as very driven and ambitious, but that I can also be quite chill and lovely to deal with."
              />
            </div>
            <div className="flex mb-24 lg:mb-0 basis-full lg:basis-1/3 px-10 justify-center items-start h-full w-full">
              <div className="flex w-full h-full flex-col justify-center">
                <img
                  src="profil.webp"
                  alt="en bild på mig själv"
                  className="rounded-md h-60 w-60 mb-10 object-cover"
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
