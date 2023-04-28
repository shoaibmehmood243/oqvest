import React from 'react';
import styles from '../../styles/blogDetail.module.css';
import BlogSection from './sections/BlogSection';
import { blog2 } from '../../assets';
import { BsShare, BsShareFill } from 'react-icons/bs'
import { RiFireFill } from 'react-icons/ri'
import { AiFillHeart } from "react-icons/ai";
import { TbMessageCircle2Filled } from "react-icons/tb";
import CommentForm from './sections/CommentForm';

const BlogDetail2 = () => {
  return (
    <div className={styles.container}>
      <div className='grid'>
        <div className='lg:col-9 pr-0 md:pr-5'>
          <h2>Article</h2>
          <div className={styles.blogImage}>
            <img src={blog2} />
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
              <h1>What To Know About Getting A Mortgage While You Still Have Student Loan Debt
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
            <p>If you're looking to buy a home but still have student loan debt, you may be wondering how this will affect your ability to get a mortgage. Here's what you need to know about getting a mortgage with student loan debt, and how Oqvest can help you through the process.</p>
            <h2>The Preapproval Process</h2>
            <p>Before we discuss how student loan debt affects your ability to get a mortgage, let's go over the process of getting preapproved for a loan. The first step is to get a preapproval letter from your lender, which is a document that shows that you are a good candidate for a mortgage based on the information you have provided. To get preapproved, your lender will ask for some financial documentation and will also look at your credit report, including your student loan balance.</p>
            <p>At Oqvest, we offer a Verified Approval Letter that gives you the strength of a cash buyer. This means that we verify your credit, income, and asset information upfront, making your offer more attractive to sellers. This can give you an edge in a competitive real estate market.</p>
            <h2>Debt-to-Income Ratio (DTI)</h2>
            <p>When applying for a mortgage, one of the most important things that lenders will look at is your debt-to-income (DTI) ratio. This ratio describes the percentage of your monthly income that goes towards debt, including your student loan payments. You may have trouble getting a mortgage if you have a high DTI ratio. To calculate your DTI ratio, add up all your monthly payments that are regular, recurring, and required. This includes your rent or mortgage payment, homeowners or renters insurance, homeowners association fees, minimum credit card payments, auto loan payments, personal loan payments, and court-ordered payments like back taxes, alimony, or child support.</p>
            <p>Next, divide your total monthly debt payments by your pre-tax monthly income. Multiply that number by 100 to get your DTI ratio as a percentage. For example, if you have a total monthly debt of $1,000 and a pre-tax monthly income of $4,000, your DTI ratio is 25%.</p>
            <p>At Oqvest, we understand that everyone's financial situation is unique. We work with you to understand your debt-to-income ratio and help you determine what you can afford to borrow. Our team of mortgage experts can answer your questions and provide you with guidance throughout the mortgage process.</p>
            <h5>DTI Example</h5>
            <p>Let’s take a look at an example. Imagine that you have a total monthly gross income of $4,000. Say that you have the following monthly debts:</p>
            <ul>
                <li>Rent: $500 </li>
                <li>Student loan minimum payment: $150</li>
                <li>Auto loan minimum payment: $250</li>
                <li>Credit card minimum payment: $100</li>
            </ul>
            <p>In this example, you’d first add up all of your debts for a total of $1,000. Then divide $1,000 by your total gross income, $4,000. Your DTI ratio is 0.25, or 25%.</p>
            <h2>Paying Off Your Student Loans</h2>
            <p>While having student loan debt may make it more difficult to get a mortgage, it's not impossible. Lenders are more concerned about your DTI ratio than the actual dollar amount of your student loan debt. If you have a reliable income and a handle on your payments, you may still be able to get a mortgage.</p>
            <p>That being said, if your DTI ratio is high, it may be a good idea to focus on paying down your student loans before buying a home. At Oqvest, we can help you understand your financial situation and provide you with guidance on how to improve your DTI ratio.</p>
            <p>In addition to your student loan debt, it's important to consider other areas of your finances before buying a home. If you don't have an emergency fund or are unable to contribute to retirement savings because of your student loan payments, it may be best to hold off on buying a home until you can improve your financial situation.</p>
            <h2>Final Thoughts</h2>
            <p>Buying a home while still having student loan debt can be a challenging process, but it's not impossible. By working with a mortgage broker like Oqvest, you can get the guidance you need to navigate the process successfully. Our team of mortgage</p>
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

export default BlogDetail2;