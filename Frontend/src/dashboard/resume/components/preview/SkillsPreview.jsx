import React from 'react'

function SkillsPreview({ resumeInfo }) {
    return (
        <div className='my-6'>
            <h2 className=' font-bold text-sm mb-2'
                style={{
                    color: resumeInfo?.themeColor
                }}
            >Skills</h2>
            <hr style={{
                borderColor: resumeInfo?.themeColor
            }} />

            <div className='grid grid-cols-2  gap-x-10 my-4'>
                {resumeInfo?.Skills?.map((Skill, index) => (
                    <div key={index} className='flex items-center justify-between'>
                        <li>{Skill.name}</li>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillsPreview