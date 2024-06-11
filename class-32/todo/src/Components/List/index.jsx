import { Card, Text } from '@mantine/core';

function List(props) {
  return (
    <>
      {
        props.list.map(item => (

          <Card
            shadow="lg"
            padding="xl"
            withBorder:true
          >

            <Text fw={500} size="lg" mt="md">
              <p>{item.text}</p>
              <p><small>Assigned to: {item.assignee}</small></p>
              <p><small>Difficulty: {item.difficulty}</small></p>
            </Text>

            <Text mt="xs" c="dimmed" size="sm">
              <div onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
            </Text>
          </Card>

        ))
      }
    </>
  );
}

export default List;
