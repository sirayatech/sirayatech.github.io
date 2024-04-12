import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "CDN Product",
    Svg: require("@site/static/img/cdn.svg").default,
    // Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,

    description: (
      <>
        Deliver content closer to users with faster load time and better
        performance. Shield your online business from cyber threats while
        safeguarding your hybrid workforce.
      </>
    ),
  },
  {
    title: "DNS Product",
    Svg: require("@site/static/img/dns.svg").default,
    description: (
      <>
        Fast, secure, and reliable DNS service anywhere in the world. The
        product has precise DNS resolution paths and provides proprietary DNS
        resolution services for different search engine crawlers.
      </>
    ),
  },
  {
    title: "Performance Product",
    Svg: require("@site/static/img/performance.svg").default,
    description: (
      <>
        Monitor and measure website performance in real-time. It helps optimize
        content delivery and DNS resolution, ensuring fast load times and
        reliable user experiences while protecting against cyber threats.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div
      className={clsx("col")}
      style={{ boxShadow: "2px 2px 5px 1px #4d88c31a" }}
    >
      <div className="text--center product-logo-item">
        <Svg
          style={{
            width: "150px",
            height: "150px",
          }}
          className={styles.featureSvg}
          role="img"
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1
          style={{
            textAlign: "center",
            // color: "#d30a01",
            fontSize: "4rem",
            marginBottom: "30px",
          }}
        >
          Siraya Product
        </h1>
        <div className="row" style={{ gap: "30px" }}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
