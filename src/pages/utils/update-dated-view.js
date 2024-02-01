import { updateTodayView } from "../today";
import { updateUpcomingView } from "../upcoming";

export default function updateDatedView () {
    updateTodayView();
    updateUpcomingView();
}