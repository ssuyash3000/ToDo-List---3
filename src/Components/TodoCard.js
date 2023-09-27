export default function TodoCard({ todo, index }) {
  const timeFormatter = (timeinMilli) => {
    // Create a new Date object using the timestamp
    const currentTime = new Date(timeinMilli);

    // Get hours, minutes, and seconds
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    // Determine whether it's AM or PM
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert hours from 24-hour format to 12-hour format
    const formattedHours = hours % 12 || 12;

    // Add leading zeros to minutes and seconds if they are less than 10
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    // Create the formatted time string
    const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
    return formattedTime;
  };
  return (
    <div className="todoCard">
      <h3>todo.text</h3>
      <h4>{timeFormatter(todo.time)}</h4>
    </div>
  );
}
