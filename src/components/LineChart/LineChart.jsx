import { LineChart as Lchart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const mathMarksNum = [
        {
            "id": 1,
            "name": "Alice Johnson",
            "mathMarks": 85,
            "physicsMarks": 78,
            "chemistryMarks": 90
          },
          {
            "id": 2,
            "name": "Bob Smith",
            "mathMarks": 78,
            "physicsMarks": 86,
            "chemistryMarks": 75
          },
          {
            "id": 3,
            "name": "Charlie Brown",
            "mathMarks": 92,
            "physicsMarks": 92,
            "chemistryMarks": 88
          },
          {
            "id": 4,
            "name": "David Clark",
            "mathMarks": 65,
            "physicsMarks": 70,
            "chemistryMarks": 68
          },
          {
            "id": 5,
            "name": "Eva Martinez",
            "mathMarks": 89,
            "physicsMarks": 85,
            "chemistryMarks": 92
          },
          {
            "id": 6,
            "name": "Fiona Taylor",
            "mathMarks": 73,
            "physicsMarks": 79,
            "chemistryMarks": 74
          },
          {
            "id": 7,
            "name": "George Lee",
            "mathMarks": 96,
            "physicsMarks": 94,
            "chemistryMarks": 97
          },
          {
            "id": 8,
            "name": "Hannah Davis",
            "mathMarks": 70,
            "physicsMarks": 68,
            "chemistryMarks": 72
          },
          {
            "id": 9,
            "name": "Ivy Turner",
            "mathMarks": 88,
            "physicsMarks": 90,
            "chemistryMarks": 85
          },
          {
            "id": 10,
            "name": "Jack Wilson",
            "mathMarks": 82,
            "physicsMarks": 80,
            "chemistryMarks": 81
          }
        ]      

    return (
        <div className='flex flex-col items-center py-10'>
            <Lchart width={700} height={300} data={mathMarksNum}>
                <XAxis dataKey='id'></XAxis>
                <YAxis></YAxis>
                <Line dataKey='mathMarks' stroke='red'></Line>
                <Line dataKey='physicsMarks' stroke='blue'></Line>
                <Line dataKey='chemistryMarks' stroke='green'></Line>
            </Lchart>
        </div>
    );
};

export default LineChart;