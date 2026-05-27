import { Button } from '@/components/ui/button';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { Brain, LoaderCircle } from 'lucide-react';
import React, { useContext, useState } from 'react'
import { BtnBold, BtnBulletList, BtnClearFormatting, BtnItalic, BtnLink, BtnNumberedList, BtnStrikeThrough, BtnStyles, BtnUnderline, Editor, EditorProvider, HtmlButton, Separator, Toolbar } from 'react-simple-wysiwyg'
import { AIChatSession } from './../../../../service/AIModal';
import { toast } from 'sonner';
const PROMPT = 'position title: {positionTitle}. Give me 5-7 bullet points describing professional experience for this role in a JSON format like this: { "bullet_points": ["point1", "point2", ...] }';

function RichTextEditor({ onRichTextEditorChange, index, defaultValue }) {
  const [value, setValue] = useState(defaultValue);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)
  const [loading, setLoading] = useState(false);

  // const GenerateSummeryFromAI = async () => {

  //   if (!resumeInfo?.Experience[index]?.title) {
  //     toast('Please Add Position Title');
  //     return;
  //   }
  //   setLoading(true)
  //   const prompt = PROMPT.replace('{positionTitle}', resumeInfo.experience[index].title);

  //   const result = await AIChatSession.sendMessage(prompt);
  //   console.log(JSON.parse(result.response.text()));
  //   const resp = result.response.text()
  //   setValue(resp.replace('[', '').replace(']', ''));
  //   setLoading(false);
  // }

  const GenerateSummeryFromAI = async () => {
    if (!resumeInfo?.Experience?.[index]?.title) {
      toast('Please Add Position Title');
      return;
    }

    setLoading(true);
    try {
      const prompt = PROMPT.replace('{positionTitle}', resumeInfo.Experience[index].title);
      const result = await AIChatSession.sendMessage(prompt);

      const text = await result.response.text();
      const parsed = JSON.parse(text); // Expecting { bullet_points: [ ... ] }

      if (parsed?.bullet_points && Array.isArray(parsed.bullet_points)) {
        const formattedHTML = `<ul>${parsed.bullet_points
          .map(point => `<li>${point}</li>`)
          .join('')}</ul>`;
        setValue(formattedHTML);
      } else {
        toast('Invalid AI response format');
      }
    } catch (err) {
      console.error('Error parsing AI response:', err);
      toast('Failed to generate summary. Try again.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      <div className='flex justify-between my-2'>
        <label className='text-xs'>Summery</label>
        <Button variant="outline" size="sm"
          onClick={GenerateSummeryFromAI}
          disabled={loading}
          className="flex gap-2 border-primary text-primary">
          {loading ?
            <LoaderCircle className='animate-spin' /> :
            <>
              <Brain className='h-4 w-4' /> Generate from AI
            </>
          }
        </Button>
      </div>
      <EditorProvider>
        <Editor value={value} onChange={(e) => {
          setValue(e.target.value);
          onRichTextEditorChange(e)
        }}>
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />


          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  )
}

export default RichTextEditor