import React from 'react';

// Define the type for the object data
type ObjectData = {
  [key: string]: string;
};

// Props interface for the component
interface Props {
  objectData: ObjectData;
}

// Functional component to render the object data
const ObjectDataComponent: React.FC<Props> = ({ objectData }) => {
  return (
    <div>
      <div className=' mt-[20px] mb-[20px] flex flex-wrap gap-[50px] gap-y-[20px]  gap-y-[10px] pt-[10px] pr-[20px] text-[20px]'>
                {Object.entries(objectData).map(([key, value]) => (
                   <div className='pl-[20px] pr-[20px] h-[40px] bg-[lightgray] text-center rounded-[5px] p-[5px]' key={key}><span>{key}</span> : <span>{value}</span></div>
                ))}
      </div>
    </div>
  );
};

export default ObjectDataComponent;
