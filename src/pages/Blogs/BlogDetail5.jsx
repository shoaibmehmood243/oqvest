import React from 'react';
import styles from '../../styles/blogDetail.module.css';
import BlogSection from './sections/BlogSection';
import {  blog4 } from '../../assets';
import { BsShare, BsShareFill } from 'react-icons/bs'
import { RiFireFill } from 'react-icons/ri'
import { AiFillHeart } from "react-icons/ai";
import { TbMessageCircle2Filled } from "react-icons/tb";
import CommentForm from './sections/CommentForm';

const BlogDetail5 = () => {
    return (
        <div className={styles.container}>
            <div className='grid'>
                <div className='lg:col-9 pr-0 md:pr-5'>
                    <h2>Article</h2>
                    <div className={styles.blogImage}>
                        <img src={blog4} />
                    </div>
                    <div className='grid mt-5'>
                        <div className='col-6'>
                            <div className={styles.read}>
                                <RiFireFill /> Most Read
                            </div>
                        </div>
                        <div className='col-6 text-end'>
                            <div className='flex align-items-center justify-content-end gap-3 md:gap-4 pr-1 md:pr-5'>
                                <span className={styles.red}>
                                    <AiFillHeart /> 31
                                </span>
                                <span className={styles.blue}>
                                    <TbMessageCircle2Filled /> 18
                                </span>
                                <span className={styles.green}>
                                    <BsShareFill /> Share
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='grid align-items-center pr-2 md:pr-5'>
                        <div className='col-12 md:col-8'>
                            <h1>Closing Costs: What Are They, And How Much Will You Pay?
                            </h1>
                        </div>
                        <div className='col-12 md:col-4 text-right'>
                            <div className={styles.shareBtn}>
                                <BsShare /> Share Now
                            </div>
                        </div>
                    </div>
                    <span className='mb-1'><strong>Posted on:</strong>  January, 2021</span>
                    <span className='mb-3'><strong>Reading time:</strong> 13 Minutes</span>
                    <div className='pr-5'>
                        <h5>What Are Closing Costs?</h5>
                        <p>Closing costs are processing fees you pay to your lender. Lenders charge these fees in exchange for creating your loan. Closing costs cover things like your home appraisal and searches on your home’s title. The specific closing costs you’ll need to pay depend on the type of loan you take and where you live.</p>
                        <h5>How Much Are Closing Costs?</h5>
                        <p>Closing costs can make up about 3 – 6% of the loan amount. This means that if you take out a mortgage worth $200,000, you can expect closing costs to be about $6,000 – $12,000.</p>
                        <p> Closing costs don’t include your down payment, but can be negotiated. The seller could pay for part or all of your closing costs. Just be aware that your negotiating power can depend heavily on the type of market you find yourself in.</p>
                        <p>Below is a state-by-state breakdown of average closing costs, with and without taxes.</p>
                        <h5>Who Pays Closing Costs?</h5>
                        <p>Both buyers and sellers pay closing costs. However, the buyer usually pays most of them. You can negotiate with a seller to help cover closing costs, which are called seller concessions. Seller concessions can be extremely helpful if you think you’ll have trouble coming up with the money you need to close. There are limits on the amount that sellers can offer toward closing costs. Sellers can only contribute up to a certain percentage of your mortgage value, which varies by loan type, occupancy and down payment. We’ve broken this down below:</p>
                        <h2>How Much Are Closing Costs For A Buyer?</h2>
                        <p>Not every buyer will pay the same amount in closing costs. Some costs are lender requirements, some are government requirements and others may be optional, depending on the situation. What you’ll need to pay for will depend on where you live, your specific lender and what type of loan you take.</p>
                        <p>At least 3 business days before you attend your closing meeting, your lender will give you a document called your Closing Disclosure. This will list out every closing cost you need to cover and how much you owe. Let’s look at some of the most common closing costs you might see on your disclosure.</p>
                        <h5>Application Fee</h5>
                        <p>Some lenders charge an application fee to process your loan request. This fee varies by lender but can be up to $500. This may be a separate fee or used as a deposit to be used toward other closing costs later. Your application fee is nonrefundable, even if you’re rejected for a loan.</p>
                        <p>Your lender will order an appraisal through a third-party appraisal management company that will send a professional appraiser to take a look at your home and determine how much your property is worth. They also do some basic safety checking to make sure the property is move-in ready. Appraisals are important because they set the amount that lenders will let you borrow for a property. This also ensures you aren’t overpaying for a property. Appraisal fees usually range between $300 and $600, but can be higher.</p>
                        <h5>Attorney Fees</h5>
                        <p>In some states, you can’t close on a housing loan without an attorney. Attorney fees cover the cost of having a real estate attorney coordinate your closing and draw up paperwork for your title transfer. Real estate attorney charges depend on your state and local rates.</p>
                        <h5>Closing Fee</h5>
                        <p>Your closing fee goes to the escrow company or attorney who conducts your closing meeting. In some states, an attorney must sign off on every closing. These costs vary depending on your state and whether an attorney must attend your closing.</p>
                        <h5>Courier Fee</h5>
                        <p>Courier fees cover the cost of transporting mortgage documents. Expect to pay around $30 in courier fees if your lender charges them.</p>
                        <h5>Credit Reporting Fee</h5>
                        <p>Credit reporting fees cover the cost of pulling your credit report and looking at your credit score. Most credit reporting fees are around $25.</p>
                        <h5>Discount Points</h5>
                        <p>Lenders allow you to pay money upfront on your loan to reduce your interest rate by buying discount points (essentially, buying down your rate to save interest over the life of the loan). One discount point equals 1% of your loan amount.</p>
                        <p>For example, if you take out a mortgage for $100,000, one point will cost you $1,000. For a $200,000 loan, a point costs $2,000. Unlike other fees, discount points aren’t mandatory.</p>
                        <p>Your fees for any discount points will appear on your Loan Estimate under Origination Charges.</p>
                        <h5>Escrow Funds</h5>
                        <p>Sometimes referred to as reserve fees or prepaids, escrow funds hold reserved money for property taxes, premiums, homeowners insurance and mortgage insurance. Your lender keeps your escrow funds in a special account. The lender then uses the escrow funds to make payments on your behalf as part of your regular mortgage payment.</p>
                        <p>At closing, your lender might require you to put a certain number of months’ worth of expenses into an escrow account. Though the number of months depends on your lender, many buyers put down 2 months’ worth of expenses at closing.</p>
                        <h5>FHA Mortgage Insurance</h5>
                        <p>If you take out an FHA loan, you’ll need to pay a mortgage insurance premium upfront at closing. The current MIP rate is 1.75% of your base loan amount.</p>
                        <p>For example, if you borrow $100,000 to buy your home, your MIP due at closing is $1,750. This upfront payment is separate from your monthly MIP, which ranges from 0.45% to 1.05% of your loan value.</p>
                        <h5>Flood Certification</h5>
                        <p>If your home is on or near a flood plain, you may need to pay $15 – $25 for a flood certification. This money goes to the Federal Emergency Management Agency, which uses the data to plan ahead for emergencies and to target high-risk zones. This closing cost only applies if you’re buying a house in a flood zone or you.</p>
                        <h5>Homeowners Association Transfer Fee</h5>
                        <p>Your homeowners association transfer fee covers the cost of moving the burden of HOA fees from the seller to the buyer. It ensures that the seller is up to date on their HOA dues. It also provides you with a copy of the association’s payment and due schedule as well as their financials.</p>
                        <p>Most of the time, the seller covers this cost. However, you might need to pay for your own transfer fee if you’re buying in a very competitive market, or if you agree to cover all closing costs.</p>
                        <p>The amount you’ll pay for your transfer depends on your HOA’s policies. If you live in an area without an HOA, you won’t pay this fee at all.</p>
                        <h5>Homeowners Insurance</h5>
                        <p>Homeowners insurance is a type of protection that compensates you if your home gets damaged. Most mortgage lenders require you to have at least a certain amount of homeowners insurance as a condition of your loan to cover damage. You have the option of also getting protection for the contents within your home and liability coverage if someone gets injured on your property.</p>
                        <p>Many lenders require you to pay for a year’s worth of homeowners insurance at closing. As a general rule, expect to pay about $35 a month for every $100,000 in home value.</p>
                        <p>For example, if you buy a home worth $200,000, you’ll likely pay about $70 per month for homeowners insurance. This means that your lender might require you to pay $840 into an escrow fund at closing.</p>
                        <h5>Loan Origination Fee</h5>
                        <p>Loan origination fees cover the cost of processing and underwriting your loan. This fee goes to your lender in exchange for underwriting your loan and creating your loan paperwork. Expect to pay about 1% of your loan's value in origination fees. Along with mortgage discount points, this will show up under Origination Charges on your Loan Estimate.</p>
                        <h2>Bottom Line</h2>
                        <p>Closing costs are processing fees you pay to your lender when you close on your loan. Closing costs on a mortgage loan usually equal 3 – 6% of your total loan balance. Appraisal fees, attorney’s fees and inspection fees are examples of common closing costs.</p>
                        <p>The specific closing costs you’ll pay depend on the type of loan you have, your home’s value and your state’s laws. Sellers may also need to pay for closing costs, depending on the sale agreement.</p>
                        <p>You might be able to save on your closing costs by negotiating with your lender. You may also want to ask your seller to pay a percentage of your closing costs or take a no-closing-cost loan. In addition to your funds, make sure you review everything you need to bring to closing.</p>
                    </div>
                </div>
                <div className='lg:col-3'>
                    <h2>Featured Articles</h2>
                    <BlogSection />
                </div>
            </div>
            <CommentForm />
        </div>
    )
}

export default BlogDetail5;