import React from "react";
import ContactOneForm from "../Contact/ContactOneForm";
import ContactOneInfoItem from "../Contact/ContactOneInfoItem";

const TncData = () => {
  return (
    <section id="tnc" className="pt-70 pb-110 contact-bg">
      <div className="container">
        {/* section title */}
        <div className="row  justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-70">
              <span className="sub-title">Sale Stages</span>
              <h2 className="title">
                <span> Terms & Conditions</span>
              </h2>
            </div>
          </div>
        </div>

        {/* secction info */}
        <div className="contact-info-wrap">
          <div className=" col-lg-12 ">
            <strong>- Total Allocation: </strong>
            A total of 121,770,000 CRNT tokens have been allocated for all
            stages combined.
            <br />
            <br />
            <strong>- User Spending Limit: </strong>
            Each participant is allowed a maximum spending limit of 5,000 USD
            (USDT/BUSD) during the sale, ensuring equal opportunity for all
            buyers.
            <br />
            <br />
            <strong>- Stage 1: </strong>
            The Seed Sale stage will last for 15 days, offering participants the
            opportunity to acquire CRNT tokens at a price of 0.0175 USD. A total
            allocation of 33,000,000 CRNT tokens has been designated for this
            stage. This early stage allows early adopters to secure their
            position and contribute to the project's growth from the outset.
            <br />
            <br />
            <strong>- Stage 2: </strong>
            The Pre-Sale phase will also run for 15 days, featuring CRNT tokens
            at a price of 0.0225 USD. Participants in the Pre-Sale stage will
            have access to an allocation of 44,000,000 CRNT tokens. This stage
            is designed to reward early supporters who are eager to contribute
            to the project's development and enjoy the benefits of getting in
            early. <br />
            <br />
            <strong>- Stage 3: </strong>
            The Public Sale is the final stage, lasting for 15 days, during
            which participants can acquire CRNT tokens at a price of 0.0275 USD.
            A total allocation of 44,770,000 CRNT tokens has been set aside for
            the Public Sale stage. This phase offers wider accessibility to
            interested individuals who may have missed out on earlier stages.
            <br />
            <br />
            <strong>- Token Fees: </strong>
            A fee of 10% will be deducted on every buy and sell of the CRNT
            token. Out of this fee, 5% will be burned, reducing the token
            supply, and 5% will be added to the liquidity pool, ensuring the
            availability of liquidity for trading.
            <br />
            <br />
            <strong>- Whitelisting Process: </strong>
            Participation in the token sale requires prior whitelisting. To gain
            access to the whitelist, interested individuals are required to
            follow our official social media platforms. Our dedicated team will
            personally reach out to each applicant, ensuring a secure and
            verified token sale experience.
            <br />
            <br /> <strong>- Referral Program: </strong>
            While whitelisting is the preferred method for participation,
            individuals who are not whitelisted can still take part using a
            unique referral code. By leveraging the referral code, participants
            can support others in joining the sale. For every CRNT token
            purchased by a referee using the referral code, the referrer will
            receive a generous reward equivalent to 10% of the purchased token
            amount. This incentivizes participants to actively engage and share
            the opportunity with their network.
            <br />
            <br />
            Don't miss out on this exclusive opportunity to join the CRNT token
            sale. With limited allocations for each stage and increasing prices
            as the sale progresses, be sure to secure your spot on the whitelist
            and stay connected with our official channels for the latest updates
            and announcements. Together, let's unlock the potential of the CRNT
            token and revolutionize the future of digital assets!
          </div>
        </div>

        {/* section form */}
        {/* <ContactOneForm /> */}
      </div>
    </section>
  );
};

export default TncData;
