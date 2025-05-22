const Button = ({ title, icon }: { title: string; icon: any }) => {
  return (
    <div className='rounded-full flex px-3 py-1 bg-green'>
      {title}
      {icon!}
    </div>
  );
};

export default Button;
