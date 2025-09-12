import Link from "next/link";
import { Button } from "../ui/button";

export default function PricingComparator() {
  return (
    <section className="bg-white py-32 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl ">
        <div className="w-full overflow-auto lg:overflow-visible">
          <div className="sticky top-24 bg-muted w-full h-28 rounded-xl border shadow-xs border-black/5" />
          <table className="w-[200vw] table-auto border-separate border-spacing-x-3 md:w-full ">
            <thead className="text-title sticky top-24 h-28">
              <tr className="*:py-4 *:text-left *:font-medium">
                <th className="lg:w-2/5"></th>
                <th className="space-y-3">
                  <span>Free</span>
                  <Button
                    size={"sm"}
                    variant={"outline"}
                    className="w-full mt-3"
                  >
                    Get Started
                  </Button>
                </th>
                <th className="bg-ui-soft space-y-3 rounded-t-[--card-radius] px-4">
                  <span>Pro</span>
                  <Button size={"sm"} className="w-full mt-3">
                    Get Started
                  </Button>
                </th>
                <th className="space-y-3">
                  <span>Startup</span>
                  <Button
                    size={"sm"}
                    variant={"outline"}
                    className="w-full mt-3"
                  >
                    Get Started
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody className="text-caption text-sm">
              <tr className="*:py-3">
                <td className="text-title font-medium">Features</td>
                <td></td>
                <td className="bg-ui-soft border-none px-4"></td>
                <td></td>
              </tr>
              <tr className="*:border-b *:py-3">
                <td>Feature 1</td>
                <td className="text-title">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-4"
                  >
                    <title>icon</title>
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td className="bg-ui-soft text-title border-none px-4">
                  <div className="-mb-3 border-b py-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-4"
                    >
                      <title>icon</title>
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </td>
                <td className="text-title">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-4"
                  >
                    <title>icon</title>
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr className="*:border-b *:py-3">
                <td>Feature 2</td>
                <td className="text-title">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-4"
                  >
                    <title>icon</title>
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </td>
                <td className="bg-ui-soft text-title border-none px-4">
                  <div className="-mb-3 border-b py-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-4"
                    >
                      <title>icon</title>
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </td>
                <td className="text-title">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-4"
                  >
                    <title>icon</title>
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr className="*:border-b *:py-3">
                <td>Feature 3</td>
                <td></td>
                <td className="bg-ui-soft text-title border-none px-4">
                  <div className="-mb-3 border-b py-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-4"
                    >
                      <title>icon</title>
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </td>
                <td className="text-title">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-4"
                  >
                    <title>icon</title>
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </td>
              </tr>
              <tr className="*:pb-3 *:pt-8">
                <td className="text-title font-medium">Reporting</td>
                <td></td>
                <td className="bg-ui-soft"></td>
                <td></td>
              </tr>
              <tr className="*:border-b *:py-3 *:text-sm">
                <td>Tokens</td>
                <td></td>
                <td className="bg-ui-soft text-title border-none px-4">
                  <div className="-mb-3 border-b py-3">20 Users</div>
                </td>
                <td className="text-title">Unlimited</td>
              </tr>
              <tr className="*:border-b *:py-3 *:text-sm">
                <td>Video calls</td>
                <td></td>
                <td className="bg-ui-soft text-title border-none px-4">
                  <div className="-mb-3 border-b py-3">12 Weeks</div>
                </td>
                <td className="text-title">56</td>
              </tr>
              <tr className="*:pb-3 *:pt-6">
                <td className="text-title font-medium">Support</td>
                <td></td>
                <td className="bg-ui-soft"></td>
                <td></td>
              </tr>
              <tr className="*:border-b *:py-3 *:text-sm">
                <td>Tokens</td>
                <td></td>
                <td className="bg-ui-soft text-title border-none px-4">
                  <div className="-mb-3 border-b py-3">Secondes</div>
                </td>
                <td className="text-title">Unlimited</td>
              </tr>
              <tr className="*:border-b *:py-3 *:text-sm">
                <td>Video calls</td>
                <td></td>
                <td className="bg-ui-soft text-title border-none px-4">
                  <div className="-mb-3 border-b py-3">Hours</div>
                </td>
                <td className="text-title">56</td>
              </tr>
              <tr className="*:pb-3 *:pt-8">
                <td className="text-title font-medium">Security</td>
                <td></td>
                <td className="bg-ui-soft"></td>
                <td></td>
              </tr>
              <tr className="*:border-b *:py-3 *:text-sm">
                <td>Tokens</td>
                <td></td>
                <td className="bg-ui-soft text-title border-none px-4">
                  <div className="-mb-3 border-b py-3">20 Users</div>
                </td>
                <td className="text-title">Unlimited</td>
              </tr>
              <tr className="*:border-b *:py-3 *:text-sm">
                <td>Video calls</td>
                <td></td>
                <td className="bg-ui-soft text-title border-none px-4">
                  <div className="-mb-3 border-b py-3">12 Weeks</div>
                </td>
                <td className="text-title">56</td>
              </tr>
              <tr className="*:pb-3 *:pt-6">
                <td className="text-title font-medium">Support</td>
                <td></td>
                <td className="bg-ui-soft"></td>
                <td></td>
              </tr>
              <tr className="*:border-b *:py-3 *:text-sm">
                <td>Tokens</td>
                <td></td>
                <td className="bg-ui-soft text-title border-none px-4">
                  <div className="-mb-3 border-b py-3">Secondes</div>
                </td>
                <td className="text-title">Unlimited</td>
              </tr>
              <tr className="*:border-b *:py-3 *:text-sm">
                <td>Video calls</td>
                <td></td>
                <td className="bg-ui-soft text-title border-none px-4">
                  <div className="-mb-3 border-b py-3">Hours</div>
                </td>
                <td className="text-title">56</td>
              </tr>
              <tr className="*:py-6 *:text-sm">
                <td></td>
                <td></td>
                <td className="bg-ui-soft rounded-b-[--card-radius] border-none"></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
