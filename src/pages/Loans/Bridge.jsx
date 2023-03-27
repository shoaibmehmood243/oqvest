import { Button } from "primereact/button";
import { constrcutionLoan } from "../../assets";
import HeroSectionTwo from "../../components/common/HeroSectionTwo";
import Welcome from "../../components/Home/Welcome";
import styles from '../../styles/layouttwo.module.css'

const Bridge = ()=> {
    return (<>
        <HeroSectionTwo image={constrcutionLoan} heading="Get the keys to your new home with a mortgage from Bridge Finance."
             subheading="Financing designed to let you move into your new dream home now." />
        <div className={styles.section}>
            <div className={styles.headers}>
                <h1>Bridge Financing </h1>
                <p className="text-center">Are you prepared to close on your new home purchase but your old one has not yet sold? We can assist if your current home has been listed for a while but the closing date for your new home is approaching.</p>
            </div>
        </div>
        <div className={styles.detailsSection}>
            <div>
                <h1>Here are some key details</h1>
                <ul>
                    <li>Interest-Only term of 11 Months</li>
                    <li>Competitive rates</li>
                    <li>No prepayment penalties</li>
                </ul>
            </div>
            <div>
                <h1>The collateral for the new home loans can be:</h1>
                <ul>
                    <li>Current home that is for sale</li>
                    <li> New home being purchased</li>
                    <li>Both Properties</li>
                </ul>
                <div><strong>Note: </strong>(All homes being included must be located in the state of Florida)</div>
            </div>
            <div>
                <h1>Other Details:</h1>
                <ul>
                    <li>
                        <strong>Appraisal(s)</strong>
                        If two properties are being mortgaged, then one residential appraisal will be required for each home.
                    </li>
                    <li>
                        <strong> The new mortgage will assume first lien position</strong>
                    </li>
                    <li>
                        <strong>Reserves of 20 months of all debts</strong>
                        (after closing) must be documented
                    </li>
                    <li>
                        <strong>Full-Doc qualification only</strong>
                        (Tax Returns and Asset-based income are used to calculate income)
                    </li>
                    <li>
                        <strong>Borrower must have clean credit;</strong>
                        however credit scores are NOT considered for underwriting qualification or pricing purposes.
                    </li>
                </ul>
            </div>
            <div className="text-center mt-6">
                <Button label="Get your Quote" />
            </div>
        </div>
        <Welcome />
    </>)
}

export default Bridge;