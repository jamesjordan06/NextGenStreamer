interface AmazonCTAButtonProps {
  url: string
  text?: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

export default function AmazonCTAButton({ 
  url, 
  text = "Check it on Amazon →", 
  variant = 'primary',
  size = 'md'
}: AmazonCTAButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
  
  const variantClasses = {
    primary: "bg-amazon-yellow hover:bg-orange-500 text-black focus:ring-amazon-yellow",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-900 focus:ring-gray-300"
  }
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="nofollow sponsored noreferrer"
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
    >
      {text}
    </a>
  )
} 