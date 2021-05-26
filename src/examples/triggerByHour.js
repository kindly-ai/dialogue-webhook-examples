import { getHours } from "date-fns";

// Create these two dialogues (triggers) in Build manually and set the slug to match
const DIALOGUE_CLOSED = "hours-closed";
const DIALOGUE_OPEN = "hours-open";

/** Trigger a dialogue based on the current hour of the day.
 *  This is useful when you want to let the users know that your customer service center is open or closed.
 */
function triggerByHour(req, res) {
  const hours = getHours(new Date());

  if (hours > 8 && hours < 16) {
    res.json({ exchange_slug: DIALOGUE_OPEN });
    return;
  }

  res.json({ exchange_slug: DIALOGUE_CLOSED });
}

export default triggerByHour;
