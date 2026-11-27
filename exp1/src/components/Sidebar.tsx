type SidebarProps = {
    onNewChat: () => void;
}

export default function Sidebar(
    { onNewChat }: SidebarProps
) {
    return (
        <aside className="sidebar">
            <button onClick={onNewChat}>
                + New chat
            </button>
        </aside>
    )
}