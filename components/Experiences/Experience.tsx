import React, { useMemo } from 'react';
import { IExperience } from 'types';

export default function Experience({
  title,
  company,
  period,
  location,
  description,
  skills,
}: IExperience) {
  // Memoize the formatted description to ensure consistency between renders
  const formattedContent = useMemo(() => {
    if (!description) return null;
    
    // Handle HTML content - simplified to always use dangerouslySetInnerHTML for any HTML
    if (typeof description === 'string' && description.includes('<')) {
      return <div dangerouslySetInnerHTML={{ __html: description }} className="prose prose-sm max-w-none theme-text-primary" />;
    }
    
    // Handle plain text or convert paragraphs to bullet points
    const cleanText = description.toString().replace(/<\/?p>/g, '');
    const sentences = cleanText
      .split('.')
      .filter(sentence => sentence.trim().length > 0)
      .map(sentence => sentence.trim() + '.');
    
    return (
      <ul className="list-none space-y-2">
        {sentences.map((sentence, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            <span>{sentence}</span>
          </li>
        ))}
      </ul>
    );
  }, [description]);

  return (
    <>      
      {description && (
        <div className="theme-text-secondary text-sm sm:text-base leading-relaxed body-text">
          {formattedContent}
        </div>
      )}
      
      {skills && skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {skills.map((skill) => (
            <span 
              key={skill}
              className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
