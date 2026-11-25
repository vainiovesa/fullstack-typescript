interface CoursePart {
  name: string;
  exerciseCount: number;
}

interface ContentProps {
  courseParts: CoursePart[];
}

export const Content = (props: ContentProps) => {
  return props.courseParts.map((part) => (
    <p key={part.name}>
      {part.name} {part.exerciseCount}
    </p>
  ));
};
