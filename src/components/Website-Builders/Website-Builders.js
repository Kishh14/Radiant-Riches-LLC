import "./Website-Builders.scss";

import { CiTrophy } from "react-icons/ci";
import { GoChevronDown } from "react-icons/go";
import { IoIosCheckmark } from "react-icons/io";

const WebsiteBuilders = ({ data }) => {
  return (
    <>
      {data.map((data, index) => {
        return (
          <>
            <div className="card">
              {data.badgeText !== "" ? (
                <div className="badge">
                  {data.badgeIcon} {data.badgeText}
                </div>
              ) : null}
              <div className="index">{index + 1}</div>

              <div className="card-body">
                <figure>
                  <img src={data.image} alt={data.imageCaption} />
                  <figcaption>{data.imageCaption}</figcaption>
                </figure>

                <div className="info">
                  <p>
                    {" "}
                    <strong>{data.title}</strong> {data.description}
                  </p>

                  {data.discount ? (
                    <p className="discount">{data.discount}</p>
                  ) : null}

                  <h4>Main Highlights</h4>
                  {data.highlights !== "" ? (
                    <p>{data.highlights}</p>
                  ) : (
                    <>
                      <div className="secondary-highlights">
                        {data.secondaryHighlights.map((highlight) => {
                          return (
                            <>
                              <p>
                                <span>{highlight.rating}</span>
                                {highlight.text}
                              </p>
                            </>
                          );
                        })}
                      </div>
                      {data.highlightChecks ? (
                        <div className="we-love-section">
                          <h5>Why we love it</h5>
                          {data.highlightChecks.map((item) => {
                            return (
                              <>
                                <p><span><IoIosCheckmark /></span> {item}</p>
                              </>
                            );
                          })}
                        </div>
                      ) : null}
                    </>
                  )}

                  <a href="/">
                    Show More <GoChevronDown />
                  </a>
                </div>

                <div className="cta">
                  <div className="ratings">
                    <h5>{data.ratingNumber}</h5>
                    <span>{data.ratingText}</span>
                    <img src={data.ratingImage} alt="stars" />
                  </div>

                  <button>View</button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default WebsiteBuilders;
