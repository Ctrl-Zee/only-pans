import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';

export const Post = () => {
  return (
    <div className="w-[600px] border-b">
      <div className="flex justify-between px-4 py-2">
        <div className="flex gap-x-2">
          <Avatar icon="pi pi-user" size="large" shape="circle" />
          <div className="flex flex-col">
            <p>Pan Man</p>
            <p>@AteInchPan</p>
          </div>
        </div>
        <div>Yesterday</div>
      </div>

      <div className="px-4 py-2">
        <p>
          Wanna spice things up in the kitchen? 🌶️ Our premium non-stick
          skillets are ready to heat things up. 😏
        </p>
      </div>
      <div className="py-2">
        <img src="/assets/red-pan.jpg" />
      </div>
      <div className="flex px-4 py-2">
        <Button
          icon="pi pi-heart"
          severity="secondary"
          rounded
          text
          aria-label="Filter"
          size="small"
        />
        <Button
          icon="pi pi-comment"
          severity="secondary"
          rounded
          text
          aria-label="Filter"
          size="small"
        />
        <Button
          icon="pi pi-dollar"
          severity="secondary"
          rounded
          text
          aria-label="Filter"
          size="small"
        />
      </div>
    </div>
  );
};
