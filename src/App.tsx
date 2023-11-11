import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from "../src/assets/goals.jpg";
import { useState } from "react";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};
export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function addGoalHandler() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Learn React + TS",
        description: "Learn it in depth",
      };
      return [...prevGoals, newGoal];
    });
  }
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your course goals</h1>
      </Header>
      <button onClick={addGoalHandler}>Add Goal</button>
      {goals.map((goal) => {
        return (
          <ul>
            <li key={goal.id}>
              <CourseGoal title={goal.title}>
                <p>{goal.description}</p>
              </CourseGoal>
            </li>
          </ul>
        );
      })}
    </main>
  );
}
