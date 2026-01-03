"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, UserPlus, Users, MessageSquare, Trophy, GitBranch, X } from "lucide-react"

const mockNotifications = [
  {
    id: 1,
    type: "connection_request",
    title: "New Connection Request",
    message: "Alex Rivera wants to connect with you",
    timestamp: "5 minutes ago",
    read: false,
    icon: UserPlus,
  },
  {
    id: 2,
    type: "team_invite",
    title: "Team Invitation",
    message: "You've been invited to join 'AI Innovators'",
    timestamp: "1 hour ago",
    read: false,
    icon: Users,
  },
  {
    id: 3,
    type: "message",
    title: "New Message",
    message: "Jordan Kim sent you a message",
    timestamp: "2 hours ago",
    read: false,
    icon: MessageSquare,
  },
  {
    id: 4,
    type: "achievement",
    title: "New Badge Earned!",
    message: "You've earned the 'Team Player' badge",
    timestamp: "1 day ago",
    read: true,
    icon: Trophy,
  },
  {
    id: 5,
    type: "project_update",
    title: "Project Update",
    message: "Sam Patel updated 'Blockchain Voting Platform'",
    timestamp: "2 days ago",
    read: true,
    icon: GitBranch,
  },
]

export function NotificationsDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [notifications, setNotifications] = useState(mockNotifications)

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: number) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })))
  }

  return (
    <div className="relative">
      <Button variant="ghost" size="sm" className="relative" onClick={() => setIsOpen(!isOpen)}>
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
            {unreadCount}
          </Badge>
        )}
      </Button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <Card className="absolute right-0 top-12 z-50 w-96 max-h-[32rem] glass-card shadow-lg overflow-hidden">
            <div className="p-4 border-b border-border flex items-center justify-between">
              <h3 className="font-semibold">Notifications</h3>
              <div className="flex items-center gap-2">
                {unreadCount > 0 && (
                  <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                    Mark all read
                  </Button>
                )}
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="overflow-y-auto max-h-[28rem]">
              {notifications.length === 0 ? (
                <div className="p-8 text-center text-muted-foreground">
                  <Bell className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No notifications yet</p>
                </div>
              ) : (
                notifications.map((notification) => {
                  const IconComponent = notification.icon
                  return (
                    <button
                      key={notification.id}
                      onClick={() => markAsRead(notification.id)}
                      className={`w-full p-4 flex items-start gap-3 hover:bg-accent transition-colors ${
                        !notification.read ? "bg-accent/50" : ""
                      }`}
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                          !notification.read
                            ? "bg-primary/20 border border-primary/40"
                            : "bg-muted border border-border"
                        }`}
                      >
                        <IconComponent
                          className={`h-5 w-5 ${!notification.read ? "text-primary" : "text-muted-foreground"}`}
                        />
                      </div>
                      <div className="flex-1 min-w-0 text-left space-y-1">
                        <p className="text-sm font-medium">{notification.title}</p>
                        <p className="text-sm text-muted-foreground">{notification.message}</p>
                        <p className="text-xs text-muted-foreground">{notification.timestamp}</p>
                      </div>
                      {!notification.read && <div className="h-2 w-2 rounded-full bg-primary shrink-0 mt-2" />}
                    </button>
                  )
                })
              )}
            </div>
          </Card>
        </>
      )}
    </div>
  )
}
