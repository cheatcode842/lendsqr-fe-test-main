import type { User as UserDataType } from '../../app/types';

type InformationType = {
  kind: string;
  description: string;
};

const Information = ({ description, kind }: InformationType) => (
  <div className='info'>
    <h3 className='kind text-lg'>{kind}</h3>
    <b className='description  text-base'>{description}</b>
  </div>
);

export const GeneralInformation = ({ ...data }: UserDataType) => {
  return (
    <div className='general-information'>
      {/* personal */}
      <div className='personal'>
        <h2 className='title text-2xl'>Personal Information</h2>
        <div className='details'>
          <Information
            kind='Full Name'
            description={`${data.profile.lastName} ${data.profile.firstName}`}
          />
          <Information kind='Phone Number' description={data.phoneNumber} />
          <Information kind='Email Address' description={data.email} />
          <Information kind='Bvn' description={data.profile.bvn} />
          <Information kind='Gender' description={data.profile.gender} />
          <Information kind='Marital status' description='Single' />
          <Information kind='Children' description='None' />
          <Information kind='Type of residence' description="Parent's Apartment" />
        </div>
      </div>
      <div className='dividerContainer'>
        <div className='divider' />
      </div>
      {/* education and employment */}
      <div className='employment-and-education text-lg'>
        <h2 className='title text-2xl'>Education and Employment</h2>
        <div className='details'>
          <Information kind='level of education' description={data.education.level} />
          <Information kind='Employment Status' description={data.education.employmentStatus} />
          <Information kind='sector of employment' description={data.education.sector} />
          <Information kind='office email' description={data.education.officeEmail} />
          <Information kind='Duration of employment' description={data.education.duration} />
          <Information
            kind='Monthly income'
            description={`${data.profile.currency} ${data.education.monthlyIncome[0]} - ${data.profile.currency} ${data.education.monthlyIncome[1]}`}
          />
          <Information
            kind='loan repayment'
            description={`${data.profile.currency} ${data.education.loanRepayment}`}
          />
        </div>
      </div>
      <div className='dividerContainer'>
        <div className='divider' />
      </div>
      {/* socials */}
      <div className='socials text-lg'>
        <h2 className='title text-2xl'>Socials</h2>
        <div className='details'>
          <Information kind='Twitter' description={data.socials.twitter} />
          <Information kind='Facebook' description={data.socials.facebook} />
          <Information kind='Instagram' description={data.socials.instagram} />
        </div>
      </div>
      <div className='dividerContainer'>
        <div className='divider' />
      </div>
      {/* Guarantors */}
      <div className='guarantors text-lg'>
        <h2 className='title text-2xl'>Guarantors</h2>
        <div className='details'>
          <Information
            kind='Full Name'
            description={`${data.guarantor.lastName} ${data.guarantor.firstName}`}
          />
          <Information kind='Phone Number' description={data.guarantor.phoneNumber} />
          <Information kind='Email' description={data.guarantor.address} />
          <Information kind='Gender' description={data.guarantor.gender} />
        </div>
      </div>
    </div>
  );
};
