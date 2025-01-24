import PropTypes from "prop-types";

export default function RepositoryCard(props) {
  return (
    <div className="border-2 border-[#74fce4] rounded-2xl shadow-[0_0_8px_#74fce4ae] px-3 py-4 text-white relative flex gap-5 repobox">
      <svg
        height="50px"
        width="50px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        className=""
      >
        <circle
          className="has-repobox:even:fill-pink-600 has-repobox:odd:fill-yellow-400 circle"
          cx="256"
          cy="256"
          r="256"
        />
        <g className="g">
          <path
            d="M213.12,319.776L99.872,270.544V243.28l113.248-49.008v32.112l-79.008,30.208l79.008,31.328V319.776
		z"
          />
          <path d="M223.6,341.408l40.912-170.832h23.776l-41.36,170.832H223.6z" />
          <path d="M298.768,319.904V288l79.104-31.104l-79.104-30.752V194.48l113.36,49.008v27.04L298.768,319.904z" />
        </g>
      </svg>
      <ul className="font-serif space-y-[10px]">
        <li>{props.name}</li>
        <li>{props.description}</li>
        <li>
          <span>{props.forks} forks</span> <span>{props.stars} stars</span>
        </li>
        <li>{props.languages}</li>
        <li>
          <a href={props.url}>view repository</a>
        </li>
      </ul>
    </div>
  );
}

RepositoryCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  stars: PropTypes.number,
  forks: PropTypes.number,
  languages: PropTypes.object,
  url: PropTypes.string,
};
