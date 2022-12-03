import { gql, useQuery } from "@apollo/client";

const GET_LESSON_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface ILesson {
  id: string;
  title: string;
}

export default function Blog() {
  const { data } = useQuery<{ lessons: ILesson[] }>(GET_LESSON_QUERY);

  return (
    <>
      <ul>
        {data?.lessons.map(lesson => {
          return <li key={lesson.id} className="text-white">{lesson.title}</li>
        })}
      </ul>
    </>
  )
}