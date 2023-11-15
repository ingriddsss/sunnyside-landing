//data
const proposal = [
  {
    title: "Transform your brand",
    description:
      "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
    img: "image-transform.jpg"
  },
  {
    title: "Stand out to the right audience",
    description:
      "Using collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.",
    img: "image-stand-out.jpg",
    reverse: true
  }
];

//fetching data
function GetProposal() {
  return (
    <div className="get-proposal">
      {proposal.map((x) => (
        <Proposal
          title={x.title}
          description={x.description}
          img={x.img}
          reverse={x.reverse}
        />
      ))}
    </div>
  );
}

//styling
function Proposal(props) {
  const { title, description, img, reverse } = props;
  return (
    <div className="proposal-case">
      {reverse ? (
        <section className="proposal reverse">
          <div className="proposal-img">
            <img src={img} />
          </div>
          <div className="proposal-text">
            <h1>{title}</h1>
            <p>{description}</p>
            <h3>LEARN MORE</h3>
          </div>
        </section>
      ) : (
        <section className="proposal normal">
          <div className="proposal-text">
            <h1>{title}</h1>
            <p>{description}</p>
            <h3>LEARN MORE</h3>
          </div>
          <div className="proposal-img">
            <img src={img} />
          </div>
        </section>
      )}
    </div>
  );
}

export default function Proposals() {
  return (
    <section className="proposals">
      <GetProposal />
    </section>
  );
}
