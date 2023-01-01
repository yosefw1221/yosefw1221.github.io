import React from "react";
import PortfolioCard from "../Portifolio";
import chapa from "../../public/chapa.png";
import mezgebeTselot from "../../public/mezgebeTselot.jpg";
import myCollegeApp from "../../public/MyCollage-feturedImage.jpg";

export default function index({innerRef}:any) {
  return (
    <section ref={innerRef} id="project" style={{ width: "100vw", paddingBottom: "3rem" }}>
      <div className=" max-w-screen-xl p-4 mx-auto">
        <p
          className="font-semibold py-4 text-6xl text-white font-sans"
        >
          Side Projects
        </p>
        <div className="grid md:grid-cols-2 items-stretch justify-center lg:grid-cols-3 gap-6 flex-wrap">
          <PortfolioCard
            image={chapa}
            link="https://yosefw1221.github.io/chapa-in-app-purchase-doc/"
            linkText="View Docs"
            tags={["Android", "Library", "Java", "Kotlin", "Chapa", "Payment"]}
            title="Android InApp Purchase"
            description={
              <div>
                An open-source Android In-App Purchase SDK using Chapa a
                fast-growing payment gateway,
                <ul className="pt-2 pl-4 list-disc">
                  <li>
                    This SDK helps Android developers sell their app and in-app
                    items to their users securely with a few lines of code.
                  </li>
                </ul>
              </div>
            }
          />
          <PortfolioCard
            image={mezgebeTselot}
            tags={["Android", "Java", "MVVM", "FireBase"]}
            title="መዝገበ ጸሎት ዘ-ተዋህዶ"
            link="https://play.google.com/store/apps/details?id=com.yosef.ethiopian.orthodox.mezgebe.teselot&hl=am&gl=US"
            description={
              <div>
                Mezgebe tselot is developed by considering Orthodox Christians
                who find it difficult to get prayer books easily.
                <br />
                <ul className="list-disc px-4 pt-2">
                  <li className="list-outside">
                    This app has a store where users can download new prayer
                    books without having to update the app.
                  </li>
                </ul>
              </div>
            }
          />
          <PortfolioCard
            image={myCollegeApp}
            tags={["Android", "Java", "MVC"]}
            title="My College App"
            link="https://apkpure.com/mycollege-app-student-s-timetable/com.josystems.mycollageapp"
            description={
              <div>
                MyCollege App is free app for student&apos;s to manage their
                lessons, exam & task in intuitive way.
                <ul className="list-disc pl-4 pt-2">
                  <li>
                    Easily share and copy timetable & courses to their classmate
                    by scanning QR CODE
                  </li>
                  <li>
                    Notify&apos;s them when they have lessons, tasks and exams
                  </li>
                  <li>Auto-mute their device during lessons</li>
                  <li>
                    beautiful widget to show lessons & exam/task at home screen
                  </li>
                </ul>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
