"use client";
import "./page.css";
import Muscles from "../../mock/Muscles.json";

function MusclePage({ params }) {
  const id = params.id;
  const muscle = Muscles.find((muscleGroup) => muscleGroup.id === id);

  console.log(muscle);

  return (
    <div className="workout-container">
      {muscle &&
        muscle.data.map((workout, index) => (
          <div className="workout" key={index}>
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img alt="" src={workout.imgSrc} className="w-full h-full object-cover" />

              <div className="bg-white p-4 sm:p-6">
                  <h3 className="mt-0.5 text-lg text-gray-900">{workout.name}</h3>

                <ol className="mt-2 text-sm text-gray-500 pl-2">
                  {workout.steps.map((step, index) => (
                    <>
                      <li key={index}>{step}</li>
                      <br></br>
                    </>
                  ))}
                </ol>
              </div>
            </article>
          </div>
        ))}
    </div>
  );
}

export default MusclePage;
