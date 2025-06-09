import { TeamMemberDetail } from "@/components/pages/team-member-detail"

type PageProps = {
  params: { id: string }
}

export default async function MemberDetailPage({ params }: PageProps) {
  return <TeamMemberDetail memberId={params.id} />
}
