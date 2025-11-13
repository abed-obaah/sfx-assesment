const messages = [
  { id: 1, name: "Peter Japhet", text: "I need some maintenance...", time: "Jan 2, 12:31pm", color: "bg-sky-400" },
  { id: 2, name: "Leo Arome", text: "I got your email ad...", time: "Wed, 06:00pm", color: "bg-purple-400" },
  { id: 3, name: "James Robinson", text: "I need some maintenance...", time: "Jan 2, 12:31pm", color: "bg-sky-500" },
  { id: 4, name: "Lupita Jonah", text: "Thank you so much for...", time: "Feb 13, 06:15pm", color: "bg-amber-400" },
];

const MessageList = () => (
  <div className="bg-white rounded-2xl p-4 shadow-sm h-full">
    <h2 className="font-semibold mb-3">Messages</h2>
    <div className="space-y-3">
      {messages.map((msg) => (
        <div key={msg.id} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 ${msg.color} rounded-full flex items-center justify-center text-white font-semibold`}>
              {msg.name.charAt(0)}
            </div>
            <div>
              <p className="font-medium">{msg.name}</p>
              <p className="text-sm text-gray-500 truncate w-40">{msg.text}</p>
            </div>
          </div>
          <span className="text-xs text-gray-400">{msg.time}</span>
        </div>
      ))}
    </div>
  </div>
);

export default MessageList;
