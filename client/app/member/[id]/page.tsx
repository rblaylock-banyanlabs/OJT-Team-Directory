import { TeamMemberDetail } from "@/components/pages/team-member-detail"

interface PageProps {
  params: { id: string }
}

export default function MemberDetailPage({ params }: PageProps) {
  return <TeamMemberDetail memberId={params.id} />
}

