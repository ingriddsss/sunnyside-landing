const feature = [
  {
    img: "image-graphic-design.jpg",
    title: "Graphic Design",
    description:
      "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potentional clients' attention."
  },
  {
    img: "image-photography.jpg",
    title: "Photography",
    description:
      "Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
  }
];

function GetFeature() {
  return (
    <div className="get-feature">
      {feature.map((x) => (
        <Feature img={x.img} title={x.title} description={x.description} />
      ))}
    </div>
  );
}

function Feature(props) {
  const { img, title, description } = props;

  return (
    <section className="features-case">
      <img id="feature-img" src={img} />
      <div className="feature">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default function Features() {
  return (
    <div>
      <GetFeature />
    </div>
  );
}
