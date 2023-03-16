import { IconHash } from "@tabler/icons";
import PresText from "./PresText";
import { HashtagIcon } from "@heroicons/react/20/solid";

const Presentation = () => {
  return (
    <>
      <div
        style={{ minHeight: "70vh" }}
        className="px-5 text-white max-w-7xl flex justify-center items-start flex-col lg:flex-row"
      >
        <div className="flex mb-24 lg:mb-0 basis-full lg:basis-1/3 px-10 justify-center items-start h-full w-full">
          <div className="flex w-full justify-center">
            <img
              src="profil.png"
              alt="en bild på mig själv"
              className="rounded-md w-96 md:w-96 lg:w-auto"
            />
          </div>
        </div>
        <div className="flex basis-full lg:basis-2/3 px-1 sm:px-10 flex-col">
          <div className="px-3 mb-2">
            <h2 style={{ fontSize: 38 }}>Hello Hello!</h2>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col basis-1/2 px-3">
              <p style={{ fontSize: 18 }}>
                You might don’t want to read a whole novel about me so I’ll try
                to be short
              </p>
              <br />
              <PresText question="My Name?" answer="Angelica Moberg Skoglund" />
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

              {/* <p style={{ fontSize: 14 }}>Okey, sorry. I’ll be real</p>
              <br /> */}
              <PresText
                question="Education?"
                answer="Web development with focus on E-commerce (the name is now changed to Full Stack developer)"
              />
              <PresText question="School?" answer="Medieinstitutet Göteborg" />
              <PresText question="Graduation?" answer="17th of May 2023" />
            </div>
            <div className="flex flex-col basis-1/2 px-3">
              <PresText
                question="My nisch?"
                answer="This one is so hard, because I’m right between frontend and backend at the moment. I know I like to work with functionality and problem solving , so I’ve been drawn to eg admin pages within projects in school and being the one ending up with creating the API’s. I think it has something to do with my need for the feeling of control, if we are going to be honest."
              />
              <PresText
                question="How I work?"
                answer="If I have something completely new in front of me, I need some ramp up time. My pattern is in general when I go back to my previous jobs  that when I get into something, I end up being good at it. That’s because I always want more. I don’t like to just know a little, I want to understand the whole process."
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
      <div className="mx-auto w-full max-w-7xl px-10 py-8 sm:py-10 sm:px-16 md:px-16 lg:px-8 lg:py-16 ">
        <p className="font-primary mt-2 text-3xl font-semi tracking-tight text-slate-50 sm:text-4xl  lg:text-5xl">
          Tech / Stack
        </p>

        <div className="mt-10 flex justify-around flex-col md:flex-row text-white space-y-18 md:space-y-18 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
          <div className="flex flex-col basis-full md:basis-1/3 mb-6 md:mb-0">
            <p style={{ fontSize: 18, marginBottom: 10 }}>
              Tech I’m comfortable with:
            </p>
            <ul>
              <li className="text-sm mb-1">
                <div className="flex gap-1 items-center">
                  <HashtagIcon width={12} />
                  <p style={{ paddingTop: 2 }}>React.js</p>
                </div>
              </li>
              <li className="text-sm mb-1">
                <div className="flex gap-1 items-center">
                  <HashtagIcon width={12} />
                  <p style={{ paddingTop: 2 }}>TypeScript</p>
                </div>
              </li>
              <li className="text-sm mb-1">
                <div className="flex gap-1 items-center">
                  <HashtagIcon width={12} />
                  <p style={{ paddingTop: 2 }}>Next.js</p>
                </div>
              </li>
              <li className="text-sm mb-1">
                <div className="flex gap-1 items-center">
                  <HashtagIcon width={12} />
                  <p style={{ paddingTop: 2 }}>Node.js</p>
                </div>
              </li>
              <li className="text-sm mb-1">
                <div className="flex gap-1 items-center">
                  <HashtagIcon width={12} />
                  <p style={{ paddingTop: 2 }}>Mantine.dev.js</p>
                </div>
              </li>
              <li className="text-sm mb-1">
                <div className="flex gap-1 items-center">
                  <HashtagIcon width={12} />
                  <p style={{ paddingTop: 2 }}>MongoDB</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col basis-1/3 mb-6 md:mb-0">
            {" "}
            <p style={{ fontSize: 18, marginBottom: 10 }}>
              Tech I’ve learned during the education but was a while ago I
              practiced:
            </p>
            <ul>
              <li className="text-sm mb-1">
                <div className="flex gap-1 items-center">
                  <HashtagIcon width={12} />
                  <p style={{ paddingTop: 2 }}>Wordpress</p>
                </div>
              </li>
              <li className="text-sm mb-1">
                <div className="flex gap-1 items-center">
                  <HashtagIcon width={12} />
                  <p style={{ paddingTop: 2 }}>WooCommerce</p>
                </div>
              </li>
              <li className="text-sm mb-1">
                <div className="flex gap-1 items-center">
                  <HashtagIcon width={12} />
                  <p style={{ paddingTop: 2 }}>PHP</p>
                </div>
              </li>
              <li className="text-sm mb-1">
                <div className="flex gap-1 items-center">
                  <HashtagIcon width={12} />
                  <p style={{ paddingTop: 2 }}>MySQL</p>
                </div>
              </li>
              <li className="text-sm mb-1">
                <div className="flex gap-1 items-center">
                  <HashtagIcon width={12} />
                  <p style={{ paddingTop: 2 }}>Material UI</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col basis-1/3">
            {" "}
            <p style={{ fontSize: 18, marginBottom: 10 }}>
              Tech I’m learning at the moment:
            </p>
            <ul>
              <li className="text-sm mb-1">
                <div className="flex gap-1 items-center">
                  <HashtagIcon width={12} />
                  <p style={{ paddingTop: 2 }}>Storyblok</p>
                </div>
              </li>
              <li className="text-sm mb-1">
                <div className="flex gap-1 items-center">
                  <HashtagIcon width={12} />
                  <p style={{ paddingTop: 2 }}>BigCommerce</p>
                </div>
              </li>
              <li className="text-sm mb-1">
                <div className="flex gap-1 items-center">
                  <HashtagIcon width={12} />
                  <p style={{ paddingTop: 2 }}>Tailwind UI</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Presentation;
