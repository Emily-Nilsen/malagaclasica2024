import Image from 'next/image'

export function CervantesMap() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12791.66287965783!2d-4.435609442263502!3d36.724585307213665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7bf7e46f3ff%3A0xb29e3d05dd25d181!2sTeatro%20Cervantes!5e0!3m2!1sen!2sno!4v1652097398412!5m2!1sen!2sno"
      width="600"
      height="600"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      className="absolute left-0 top-0 h-full w-full"
    ></iframe>
  )
}
