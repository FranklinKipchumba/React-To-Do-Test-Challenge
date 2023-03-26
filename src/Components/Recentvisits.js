function RecentVisits({ recentVisits }) {
    return (
      <div>
        <h2>Your Recent Visits</h2>
        <ul>
          {recentVisits.map((visit) => (
            <li key={visit.id}>{visit.date}: {visit.location}</li>
          ))}
        </ul>
      </div>
    );
  }
  
export default RecentVisits;