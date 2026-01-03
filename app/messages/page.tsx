"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Search, Send, Paperclip, Code, MoreVertical, Circle } from "lucide-react"

const mockConversations = [
  {
    id: 1,
    user: { name: "Alex Rivera", username: "alexrivera", avatar: "/placeholder.svg" },
    lastMessage: "Hey! Want to team up for TreeHacks?",
    timestamp: "2m ago",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    user: { name: "Jordan Kim", username: "jordankim", avatar: "/placeholder.svg" },
    lastMessage: "The smart contract is ready for review",
    timestamp: "1h ago",
    unread: 0,
    online: true,
  },
  {
    id: 3,
    user: { name: "Sam Patel", username: "sampatel", avatar: "/placeholder.svg" },
    lastMessage: "Check out the new UI designs!",
    timestamp: "3h ago",
    unread: 1,
    online: false,
  },
  {
    id: 4,
    user: { name: "Casey Zhang", username: "caseyzhang", avatar: "/placeholder.svg" },
    lastMessage: "Thanks for the feedback on the wireframes",
    timestamp: "1d ago",
    unread: 0,
    online: false,
  },
]

const mockMessages = [
  {
    id: 1,
    sender: "other",
    content: "Hey! Want to team up for TreeHacks?",
    timestamp: "10:30 AM",
  },
  {
    id: 2,
    sender: "other",
    content: "I saw your profile and think we'd make a great team!",
    timestamp: "10:31 AM",
  },
  {
    id: 3,
    sender: "me",
    content: "That sounds awesome! What's your tech stack?",
    timestamp: "10:35 AM",
  },
  {
    id: 4,
    sender: "other",
    content: "I'm proficient in React, Node.js, and Python. Also have some experience with AI/ML.",
    timestamp: "10:36 AM",
  },
  {
    id: 5,
    sender: "me",
    content: "Perfect! I've been wanting to build an AI-powered project. Let's discuss ideas.",
    timestamp: "10:38 AM",
  },
]

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(mockConversations[0])
  const [messageInput, setMessageInput] = useState("")

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card className="glass-card overflow-hidden h-[calc(100vh-12rem)]">
            <div className="grid grid-cols-1 md:grid-cols-3 h-full">
              {/* Conversations List */}
              <div className="border-r border-border flex flex-col">
                {/* Header */}
                <div className="p-4 border-b border-border space-y-4">
                  <h2 className="text-xl font-bold">Messages</h2>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search conversations..." className="pl-10" />
                  </div>
                </div>

                {/* Conversation List */}
                <div className="flex-1 overflow-y-auto">
                  {mockConversations.map((conversation) => (
                    <button
                      key={conversation.id}
                      onClick={() => setSelectedChat(conversation)}
                      className={`w-full p-4 flex items-start gap-3 hover:bg-accent transition-colors ${
                        selectedChat.id === conversation.id ? "bg-accent" : ""
                      }`}
                    >
                      <div className="relative">
                        <img
                          src={conversation.user.avatar || "/placeholder.svg"}
                          alt={conversation.user.name}
                          className="h-12 w-12 rounded-full object-cover border-2 border-border"
                        />
                        {conversation.online && (
                          <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-success border-2 border-card" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <div className="flex items-start justify-between mb-1">
                          <p className="font-semibold truncate">{conversation.user.name}</p>
                          <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                            {conversation.timestamp}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                          {conversation.unread > 0 && (
                            <Badge className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                              {conversation.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Area */}
              <div className="md:col-span-2 flex flex-col">
                {/* Chat Header */}
                <div className="p-4 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={selectedChat.user.avatar || "/placeholder.svg"}
                        alt={selectedChat.user.name}
                        className="h-10 w-10 rounded-full object-cover border-2 border-border"
                      />
                      {selectedChat.online && (
                        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-success border-2 border-card" />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold">{selectedChat.user.name}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Circle
                          className={`h-2 w-2 ${selectedChat.online ? "fill-success text-success" : "fill-muted-foreground text-muted-foreground"}`}
                        />
                        {selectedChat.online ? "Online" : "Offline"}
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {mockMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`max-w-[70%] ${message.sender === "me" ? "order-2" : "order-1"}`}>
                        <div
                          className={`rounded-lg p-3 ${
                            message.sender === "me"
                              ? "bg-primary text-primary-foreground"
                              : "bg-card border border-border"
                          }`}
                        >
                          <p className="text-sm leading-relaxed">{message.content}</p>
                        </div>
                        <p
                          className={`text-xs text-muted-foreground mt-1 ${message.sender === "me" ? "text-right" : "text-left"}`}
                        >
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-border">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Code className="h-4 w-4" />
                    </Button>
                    <Input
                      placeholder="Type a message..."
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          setMessageInput("")
                        }
                      }}
                      className="flex-1"
                    />
                    <Button className="glow-border">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
