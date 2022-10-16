import Analytics from '../components/analytics';

const Dashboard = () => {
  return (
    <div className='page dashbaord'>
      <h1 className='page-title text-2xl'>User</h1>
      <Analytics
        activeUsers={'145,565'}
        usersWithLoan={'66,247'}
        usersWithSavings={'105,565'}
        totalNumberOfUser={'325,565'}
      />
    </div>
  );
};

export default Dashboard;
