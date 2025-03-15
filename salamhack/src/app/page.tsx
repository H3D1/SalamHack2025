"use client"
import { useState } from "react"
import {
  Bell,
  Calendar,
  ChevronDown,
  Globe,
  Home,
  Layers,
  MessageSquare,
  Mic,
  Plus,
  Search,
  Settings,
  Users,
  BarChart2,
  Folder,
  Zap,
  List,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function MeetingDashboard() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-8 h-8 rounded-md flex items-center justify-center">
              <Mic className="h-4 w-4 text-white" />
            </div>
            <h1 className="text-xl font-bold">echonotes.ai</h1>
          </div>
        </div>

        <nav className="flex-1 p-2">
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-800">
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-800">
              <MessageSquare className="mr-2 h-4 w-4" />
              Meetings
            </Button>
            <Button variant="ghost" className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-800">
              <Zap className="mr-2 h-4 w-4" />
              Meeting Insights
            </Button>
            <Button variant="ghost" className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-800">
              <List className="mr-2 h-4 w-4" />
              Playlists
            </Button>
            <Button variant="ghost" className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-800">
              <Users className="mr-2 h-4 w-4" />
              Contacts
            </Button>
            <Button variant="ghost" className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-800">
              <Folder className="mr-2 h-4 w-4" />
              Uploads
            </Button>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-800">
            <h3 className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Tools</h3>
            <div className="mt-3 space-y-1">
              <Button
                variant="ghost"
                className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-800"
              >
                <Layers className="mr-2 h-4 w-4" />
                Integrations
                <Badge variant="outline" className="ml-auto bg-indigo-600 text-white border-0 text-xs">
                  NEW
                </Badge>
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-800"
              >
                <FileText className="mr-2 h-4 w-4" />
                Topic Tracker
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-800"
              >
                <BarChart2 className="mr-2 h-4 w-4" />
                Analytics
              </Button>
            </div>
          </div>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <Button variant="ghost" className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-800">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Search header */}
        <header className="bg-white border-b border-slate-200 p-4 flex items-center justify-between">
          <div className="relative w-96">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <Input
              type="search"
              placeholder="Search across meetings..."
              className="w-full pl-9 bg-slate-50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="text-slate-700">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">Upgrade</Button>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Progress value={79} className="w-24 h-2" />
              791 mins left / 800 mins
            </div>
          </div>
        </header>

        {/* Content area */}
        <div className="flex-1 overflow-auto p-6">
          <Tabs defaultValue="feed">
            <div className="flex justify-between items-center mb-6">
              <TabsList>
                <TabsTrigger value="feed">My Feed</TabsTrigger>
                <TabsTrigger value="tasks">Tasks</TabsTrigger>
                <TabsTrigger value="ai">
                  AI Tools
                  <Badge variant="outline" className="ml-2 bg-indigo-600 text-white border-0 text-xs">
                    NEW
                  </Badge>
                </TabsTrigger>
              </TabsList>
              <Button variant="outline" className="gap-1 text-slate-600">
                <Globe className="h-4 w-4" />
                Share Feedback
              </Button>
            </div>

            <TabsContent value="feed" className="mt-0">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="h-4 w-4 text-indigo-500" />
                  <h3 className="font-medium">Recent</h3>
                  <span className="text-sm text-slate-500">1 Meeting</span>
                </div>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <Avatar className="h-10 w-10 rounded">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Meeting thumbnail" />
                        <AvatarFallback>MT</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="font-medium">Product Strategy Discussion</h4>
                          <span className="text-sm text-slate-500">Fri, Mar 14 · 3:52 AM</span>
                        </div>

                        <div className="mt-4 space-y-4">
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 w-1 h-1 rounded-full bg-emerald-500 mt-2"></div>
                            <div>
                              <p className="text-slate-700">
                                <span className="font-medium">Market Analysis:</span> Identified key growth
                                opportunities in mid-market segment with 23% potential expansion.
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-3">
                            <div className="flex-shrink-0 w-1 h-1 rounded-full bg-amber-500 mt-2"></div>
                            <div>
                              <p className="text-slate-700">
                                <span className="font-medium">Product Roadmap:</span> Prioritized features based on
                                customer feedback and competitive analysis.
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-3">
                            <div className="flex-shrink-0 w-1 h-1 rounded-full bg-indigo-500 mt-2"></div>
                            <div>
                              <p className="text-slate-700">
                                <span className="font-medium">Action Items:</span> Team to prepare detailed
                                implementation plan by next week.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Right sidebar */}
      <div className="w-80 border-l border-slate-200 bg-white p-6 overflow-y-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 w-6 h-6 rounded flex items-center justify-center">
              <Mic className="h-3 w-3 text-white" />
            </div>
            <h3 className="font-medium">EchoNotes Assistant</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Enable Unlimited Transcription</span>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm">Auto join calendar meetings</span>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm">All meetings with web-conf link</span>
              <Button variant="ghost" size="sm" className="h-6 px-2">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="font-medium mb-4">Send email recap to</h3>
          <Button variant="outline" size="sm" className="w-full justify-between">
            Everyone on the invite
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="h-4 w-4 text-slate-500" />
            <h3 className="font-medium">Meeting language</h3>
            <span className="text-indigo-600 text-sm">English (Global)</span>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="h-4 w-4 text-slate-500" />
            <h3 className="font-medium">Upcoming Meetings</h3>
          </div>

          <div className="flex flex-col items-center justify-center text-center p-6 border border-dashed border-slate-300 rounded-lg">
            <Calendar className="h-6 w-6 text-slate-400 mb-2" />
            <p className="text-sm text-slate-600 mb-1">No meetings in the next 2 days</p>
            <p className="text-xs text-slate-500">Schedule a meeting on your calendar or transcribe a live meeting</p>
          </div>
        </div>

        <Button className="w-full gap-2">
          <Plus className="h-4 w-4" />
          New
        </Button>
      </div>
    </div>
  )
}

