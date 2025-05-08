import { useParams } from 'react-router-dom';
import EventDetailsPage from './EventsDetailsPage';
import Events from './EventsPage/Events';

export function EventsPage() {
    const { id } = useParams();
    
    return (
      <>
        {id ? (
          <EventDetailsPage id={id}/>
        ) : (
          <Events/>
        )}
      </>
    );
  }