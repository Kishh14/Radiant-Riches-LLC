import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import BlogHeader from "./components/Blog-header/Blog-Header";
import WebsiteBuilders from "./components/Website-Builders/Website-Builders";
import RelatedCard from "./components/Related-Card/Related-Card";
import SingUpForm from "./components/SignUp-Form/SignUp-Form";
import Footer from "./components/Footer/Footer";

import builder1 from "./assets/builder-1.png";
import rating from "./assets/ratings.png";
import rating3star from "./assets/ratings-3-star.png";
import rating4star from "./assets/ratings-4.5-star.png";

import { CiTrophy } from "react-icons/ci";
import { IoDiamondOutline } from "react-icons/io5";

function App() {
  const websiteBuilderData = [
    {
      badgeText: "Best Choice",
      badgeIcon: <CiTrophy />,
      image: builder1,
      imageCaption: "Builder 1",
      title: "WixPro 72-Inch Responsive Website Builder -",
      description:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      highlights:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      ratingNumber: "9.7",
      ratingText: "Exceptional",
      ratingImage: rating,
    },
    {
      badgeText: "Best Value",
      badgeIcon: <IoDiamondOutline />,
      image: builder1,
      imageCaption: "Builder",
      title: "SiteCraft 68-Inch Ultimate Web Design Studio -",
      description:
        "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      highlights:
        "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      ratingNumber: "9.5",
      ratingText: "Excellent",
      ratingImage: rating4star,
    },
    {
      badgeText: "",
      image: builder1,
      imageCaption: "Builder 1",
      title: "WixPro 72-Inch Responsive Website Builder -",
      description:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      highlights:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      ratingNumber: "9.3",
      ratingText: "Exceptional",
      ratingImage: rating,
    },
    {
      badgeText: "",
      image: builder1,
      title: "CDK Resposive Builder:",
      imageCaption: "CDK",
      description:
        "An extensive library of widgets and apps, and detailed step-by-step guides",
      highlights: "",
      secondaryHighlights: [
        { rating: 9.9, text: "Building Responsive" },
        { rating: 8.9, text: "Cool" },
        { rating: 8.9, text: "Docs" },
      ],
      highlightChecks: ["Documentation", "Easy Use", "Out of Box"],
      ratingNumber: "9.5",
      ratingText: "Exceptional",
      discount: "26% off",
      ratingImage: rating4star,
    },
  ];

  return (
    <div className="App">
      <Navbar></Navbar>

      <main>
        <BlogHeader></BlogHeader>
        <section className="blog-post">
          <WebsiteBuilders data={websiteBuilderData}></WebsiteBuilders>
        </section>
        <section className="related-deals">
          <h3>Realted Deals you might like for</h3>
          <div className="related-deals-container">
            <RelatedCard cardImage={builder1}></RelatedCard>
            <RelatedCard cardImage={builder1}></RelatedCard>
            <RelatedCard cardImage={builder1}></RelatedCard>
          </div>
        </section>
        <section className="singUp-form">
          <SingUpForm></SingUpForm>
        </section>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
