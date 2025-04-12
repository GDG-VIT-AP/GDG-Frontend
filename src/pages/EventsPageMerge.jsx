import { useParams } from 'react-router-dom';
import EventDetailsPage from './EventsDetailsPage';

export function EventsPage() {
    const { id } = useParams();
    
    return (
      <>
        {id ? (
          <EventDetailsPage id={id}/>
        ) : (
          <div>All events listed here</div>
        )}
      </>
    );
  }