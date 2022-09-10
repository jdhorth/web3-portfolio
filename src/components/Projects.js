// Import Assets
import crypto from '../assets/cryptobitpunk.jpg';
import funbay from '../assets/fun-bay-thumb.jpg';
import bbandit from '../assets/bbandit.jpg';
import tw33ter from '../assets/tw33ter.png';
import d3pp from '../assets/d3pp.png';
import lens from '../assets/lens-protocol-thumb.jpg';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Lens Protocol</h3>
                    <img src={lens} alt="lens protocol" />
                    <p>A web3 social media dapp, lens protocol frontend, social graph on the Polygon Blockchain.
                    </p>

                    <a href="https://lens-protocol-chi.vercel.app/" className="button">Site</a>
                    <a href="https://github.com/jdhorth/lens-protocol-frontend" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Crypto Dashboard</h3>
                    <img src={crypto} alt="Crypto Dashboard" />
                    <p>This is a Next.js Crypto Dashboard using the Coingecko API. Top 100 sortable coin list and exchange info.
                    </p>

                    <a href="https://coin-clone.vercel.app/" className="button">Site</a>
                    <a href="https://github.com/jdhorth/coin-clone" className="button">Code</a>
                </div>
                <div className="projects__card">
                    <h3>NFT Mint dApp</h3>
                    <img src={d3pp} alt="Signature NFT Minting" />
                    <p>This is a signature based minting site using the thirdweb dashboard, contract deploy to testnet Mumbai on Polygon
                    </p>

                    <a href="https://web3-thirdweb.vercel.app/" className="button">Site</a>
                    <a href="https://github.com/jdhorth/web3-thirdweb/" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Recipe CMS</h3>
                    <img src={funbay} alt="Recipe Next.js" />
                    <p>A Next.js project Jamstack site with headless Contentful CMS, served on Vercel content delivery network.
                    </p>

                    <a href="https://fun-bay.com/" className="button">Site</a>
                    <a href="https://github.com/jdhorth/marmite-stack" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Markdown Site</h3>
                    <img src={bbandit} alt="Non-fungi Gatsby" />
                    <p>A Gatsby site, React / GraphQL, builds posts using markdown, optimized, fast, customizable site on 'the edge'.
                    </p>

                    <a href="http://non-fungi.xyz" className="button">Site</a>
                    <a href="/" className="button">Code</a>
                </div>
                <div className="projects__card">
                    <h3>Web3 Twitter</h3>
                    <img src={tw33ter} alt="Web3 Twitter" />
                    <p>A web3 Twitter project, smart contract on Mumbai testnet, Moralis (web3 firebase) backend.
                    </p>

                    <a href="https://web3-twitter-sigma.vercel.app/" className="button">Site</a>
                    <a href="https://github.com/jdhorth/web3-twitter" className="button">Code</a>
                </div>

            </div>
        </section>
    );
}

export default Projects;