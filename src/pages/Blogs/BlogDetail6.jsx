import React, { useEffect, useState } from 'react';
import styles from '../../styles/blogDetail.module.css';
import BlogSection from './sections/BlogSection';
import { blog6 } from '../../assets';
import { BsShare, BsShareFill } from 'react-icons/bs'
import { RiFireFill } from 'react-icons/ri'
import { AiFillHeart } from "react-icons/ai";
import { TbMessageCircle2Filled } from "react-icons/tb";
import CommentForm from './sections/CommentForm';
import { Tooltip } from 'primereact/tooltip';

const BlogDetail6 = () => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.container}>
      <div className='grid'>
        <div className='col-12 lg:col-9 pr-0 md:pr-5'>
          <h2>Article</h2>
          <div className={styles.blogImage}>
            <img src={blog6} />
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
              </div>
            </div>
          </div>
          <div className='grid align-items-center pr-2 md:pr-5'>
            <div className='col-12 md:col-8'>
              <h1>How Much House Can I Afford? How To Assess Your Finances & Calculate What To Spend
              </h1>
            </div>
            <div className='col-12 md:col-4 text-right'>
              <Tooltip content={copied ? 'Copied' : 'Copy to clipboard'} target=".sharebtn" />
              <div data-pr-position="top" onClick={copyToClipboard} style={{ cursor: 'pointer' }} className={`sharebtn ${styles.shareBtn}`}>
                <BsShare /> Share Now
              </div>
            </div>
          </div>
          <span className='mb-1'><strong>Posted on:</strong>  January, 2021</span>
          <span className='mb-3'><strong>Reading time:</strong> 13 Minutes</span>
          <div className='pr-5'>
            <h5>Understanding How Much Mortgage You Can Afford</h5>
            <p>The Oqvest® Home Affordability Calculator gives you the option to see how much house you can afford, or how much cash you need for your down payment and closing costs.</p>
            <p>If you’re looking into how much home you can afford, just enter your location, yearly income, monthly debts and how much money you have for a down payment and closing costs. The calculator will take this information and tell you how big of a loan you can take.</p>
            <p>On the flip side, if you have a price in mind, you can use the calculator to see how much cash you’ll need for a down payment and closing costs.</p>
            <h5>The 29/41 Rule And How It Relates To Calculating Home Affordability</h5>
            <p>When lenders evaluate your mortgage application, they calculate your debt-to-income ratio. This is your monthly debt payments divided by your monthly gross income. Lenders look at this number to see how much additional debt you can take on.</p>
            <p>According to the 29/41 rule of thumb, it’s best to keep your DTI within a range that’s defined by these two numbers. Here’s an example.</p>
            <p>The first number, 29, represents your housing expense ratio. This is calculated by dividing your mortgage payment (principal, interest, real estate taxes, homeowners insurance and, if applicable, homeowners association dues and mortgage insurance) into your gross monthly income and converting it to a percentage.</p>
            <p>It’s defined by the following formula:</p>
            <div className='w-full md:w-10 lg:w-8 mx-auto text-center my-5'>
              <p style={{ fontStyle: 'italic', fontWeight: '500' }} className='my-1'>Principal + Interest + Property Taxes + Insurance (Homeowners & Mortgage)
                + Homeowners Association Dues</p>
              <div className='flex gap-1 align-items-center w-full'>
                <hr style={{ background: '#000', height: '2px' }} className='w-full' />
                <span>*100</span>
              </div>
              <p style={{ fontStyle: 'italic', fontWeight: '500' }} className='my-1'>Gross Monthly Income</p>
            </div>
            <p>The 41 represents your total DTI after all your other debts are added, including revolving debt (credit cards and other lines of credit) and installment debt – mortgage, car payment, student loans, etc.
              That equation is as follows:
            </p>
            <div className='w-full md:w-10 lg:w-8 mx-auto text-center my-5'>
              <p style={{ fontStyle: 'italic', fontWeight: '500' }} className='my-1'>Installment Debt + Revolving Debt Payments</p>
              <div className='flex gap-1 align-items-center w-full'>
                <hr style={{ background: '#000', height: '2px' }} className='w-full' />
                <span>*100</span>
              </div>
              <p style={{ fontStyle: 'italic', fontWeight: '500' }} className='my-1'>Gross Monthly Income</p>
            </div>
            <p>The 29/41 rule is important to know when thinking about your mortgage qualification because DTI helps lenders determine your ability to pay your mortgage. Although higher housing expense and DTI ratios are allowed under many loan types (including conventional, FHA, USDA and VA loans), the 29/41 rule provides a good starting point. You need to calculate how much house you can afford while maintaining a wide range of loan options.</p>
            <p>Make sure your mortgage payment (principal, interest, taxes, insurance and homeowners association dues) is no more than 29% of your gross monthly income. Also make sure your total monthly debt (mortgage plus car loans, student debts, etc.) is no more than 41% of your total monthly income.</p>
            <h5>How To Determine Your DTI Ratio</h5>
            <p>Mortgage lenders consider DTI an important qualifying factor. The amount of debt you have is considered a very reliable predictor of the risk associated with the approval of any mortgage loan. Therefore, it’s important to know your numbers.</p>
            <p>Let’s look at how DTI is calculated.</p>
            <strong className='mb-0'>Step 1: Add Up All Of Your Monthly Debts</strong>
            <p className='mt-1'>Your debt payments could include:</p>
            <ul>
              <li>Monthly rent or house payments</li>
              <li>Monthly child support payments or alimony</li>
              <li>Student loan payments</li>
              <li>Car payments</li>
              <li>Monthly credit card minimum payments</li>
              <li>Any other debts you might have</li>
            </ul>
            <p>You don’t need to add in: </p>
            <ul>
              <li>Grocery bills</li>
              <li>Utility bills</li>
              <li>Taxes</li>
              <li>Any other bills that may vary month to month</li>
            </ul>
            <strong>Step 2: Divide Your Monthly Debts By Your Monthly Gross Income</strong>
            <p>Next, do a simple calculation. For example, let’s say your debts add up to $2,000 per month. If your monthly gross income (your before-tax income) is $6,000 per month, then your DTI ratio is 0.33, or 33%.</p>
            <h2>Home Buyer Education
              Other Factors That Determine How Much Home You Can Afford
            </h2>
            <p>Although DTI and housing expense ratio are important factors in mortgage qualification, there are other things that impact your monthly mortgage payment and how much you can afford.</p>
            <p>What follows are several factors to keep in mind before you hit the pavement looking for a new home.</p>
            <h5>Mortgage Term</h5>
            <p>Mortgage term refers to the length of time you have to pay back the amount you’ve borrowed. The most common loan terms are 15 and 30 years, though there are other terms available.</p>
            <p>Your mortgage term impacts your monthly payments. Here’s an example:</p>
            <p>If you buy a $200,000 house with a 15-year fixed-rate mortgage at 3.90%, your monthly payments are $1,469.37 (excluding taxes and insurance).</p>
            <p>Now, let’s change the term. Let’s say you still buy the $200,000 house at 3.90%, but the term is 30 years. Your monthly payments are $943.34 (excluding taxes and insurance).</p>
            <p>Once you close on your home loan, your monthly mortgage payment may well be the biggest debt payment you make each month, so it’s important to make sure you can afford it. Along with the down payment, this is probably one of the two biggest factors that determine how much you can afford.</p>
            <h5>Your Monthly Budget</h5>
            <p>Now that you’ve looked at your DTI and any debt you may have, think about your budget. How does a monthly mortgage payment fit in? If you don’t have a budget, keep track of your income and expenses for a couple of months. You can create a personal budget spreadsheet or use any number of budgeting apps or online budgeting tools.</p>
            <p>In the mortgage process, it’s important to look at your budget, savings and assets for a couple of reasons. For one thing, you might need savings for a down payment, which we’ll discuss in a later section. However, for now, let’s go over something called reserves. These may be required, depending on the type of loan you’re getting.</p>
            <h5>Down Payment</h5>
            <p>You might think you need to plunk down 20% of your purchase price for a down payment, but that’s actually not true. You can get a conventional loan (a loan backed by Fannie Mae or Freddie Mac) for as little as 3% down.</p>
            <p>That’s not to say there aren’t advantages to a higher down payment. For example:</p>
            <ul>
              <li>Lower interest rates: For starters, interest rates are decided on two factors: down payment and median FICO® Score. The higher your down payment is, the better your interest rate will be. If a lender doesn’t have to loan as much money, the investment is considered a better risk.</li>
              <li>No mortgage insurance: If you put down less than 20%, you’ll likely have to pay for mortgage insurance, which can involve a monthly fee as well as an upfront fee depending on the loan option you qualify for. Mortgage insurance protects your lender and the mortgage investor if you don’t make payments and default on your loan.</li>
            </ul>
            <p>As you determine how much house you can afford, remember to factor in down payments, especially if you’re trying to afford the 20% to avoid PMI.</p>
            <h5>Extra Costs</h5>
            <p>In addition to the cost of your down payment and any private mortgage insurance, you’ll also need to consider homeowners insurance, taxes and closing costs:</p>
            <ul>
              <li>Homeowners insurance: Your homeowners insurance amount depends on where you live, your neighborhood and the type of home you buy. Homeowners insurance calculations also consider the value of your property, potential rebuild costs and the value of your at-risk assets. It’s best to call an insurance agent to get an idea of what your homeowners insurance amount could be.</li>
              <li>Property taxes: If you own property, you pay property taxes, which amount to your property’s assessed value multiplied by the local tax rate. You can ask your local tax assessor for more information.</li>
              <li>Closing costs: Closing costs must be paid during closing, the last step in the home buying process. Your lender will give you an estimate of your closing costs. These include the loan origination fee, appraisal fees, title search fees, credit report charges and more. Typical closing costs on a home purchase can be anywhere from 3 – 6%.</li>
            </ul>
            <h2>Conclusion</h2>
            <p>Ultimately, how much home you can afford depends on your financial situation and preferences. It requires a more comprehensive decision than just how much money you want to spend on mortgage payments each month.</p>
            <p>Evaluate your full financial situation, your ability to pay off a mortgage and where you need to save for other things. Once you’ve done all that, it’s time to go after that perfect home.</p>
            <p>A vital step in figuring out how much you’re able to spend on a home is seeking out mortgage approval. Get approved with Oqvest topday.</p>
          </div>
        </div>
        <div className='col-12 lg:col-3'>
          <h2 className='text-center md:text-left'>Featured Articles</h2>
          <BlogSection id={6} />
        </div>
      </div>
      <CommentForm />
    </div>
  )
}

export default BlogDetail6;